import React, { Component } from 'react';
import { Formik } from 'formik';
import ConfirmationView from '../presentational/ConfirmationView.jsx';
import Notifier, { openSnackbar } from '~/src/components/presentational/Notifier.jsx';
import * as Yup from 'yup';
// import { DisplayFormikState } from "~/src/components/presentational/DisplayFormikState.jsx";
import { resetPassService } from '../../services/resetPass.service.js';
import PropTypes from "prop-types";

const values = { 
    code: "",
    new_password:"",
    repeat_password:""
 };

const validationSchema = Yup.object({
    code: Yup
        .string()
        .required("Confirmation code is required!"),
    new_password: Yup
        .string("")
        .min(8, "Password must contain at least 8 characters")        
        .required("Enter new password"),
    repeat_password: Yup
        .string("")
        .oneOf([Yup.ref('new_password')], 'Passwords are not the same!')
        .required("Password confirmation is required!")
});

export default class ConfirmationForm extends Component {


    handleSubmit = async (values, actions) => {
        try {
            let response = await resetPassService.requestCode(values);
            if (response.status == "ok") {
                //openSnackbar('Code successfully sent.', 'success', { vertical: 'bottom', horizontal: 'right' });
                let { setConfirmed } = this.props;
                setConfirmed();
            }
            else {
                openSnackbar(response.error.errorMessage, 'error', { vertical: 'bottom', horizontal: 'right' });
            }
        } catch (e) {
            console.log(e);
        } finally {
            actions.setSubmitting(false);
        }
    }

    render() {
        return (
            <React.Fragment>
                <Notifier />
                <Formik
                    render={props => (
                        <React.Fragment>
                            <ConfirmationView isValid={props.isValid} isSubmitting={props.isSubmitting} />
                            {/* <DisplayFormikState {...props} /> */}
                        </React.Fragment>
                    )}
                    initialValues={values}
                    validationSchema={validationSchema}
                    onSubmit={this.handleSubmit} />
            </React.Fragment>
        )
    }
}

ConfirmationForm.propTypes = {
    setConfirmed: PropTypes.func
}

