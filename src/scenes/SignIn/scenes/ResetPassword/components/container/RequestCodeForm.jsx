import React, { Component } from 'react';
import { Formik } from 'formik';
import RequestCodeView from '../presentational/RequestCodeView.jsx';
import Notifier, { openSnackbar } from '~/src/components/presentational/Notifier.jsx';
import * as Yup from 'yup';
// import { DisplayFormikState } from "~/src/components/presentational/DisplayFormikState.jsx";
import { resetPassService } from '../../services/resetPass.service.js';
import PropTypes from "prop-types";

const values = { email: "" };

const validationSchema = Yup.object({
    email: Yup
        .string()
        .email("Email is not valid!")
        .required("Email is required!")
});

export default class RequestCodeForm extends Component {


    handleSubmit = async (values, actions) => {
        try {    
            let response = await resetPassService.requestCode(values);           
            if (response.status == "ok") {
                //openSnackbar('Code successfully sent.', 'success', { vertical: 'bottom', horizontal: 'right' });
                let {setCodeSent} = this.props;
                setCodeSent();
            }
            else {
                openSnackbar(response.error.errorMessage, 'error', { vertical: 'bottom', horizontal: 'right' });
            }                      
        } catch (e) {
            console.log(e);
        }finally{
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
                            <RequestCodeView isValid={props.isValid} isSubmitting={props.isSubmitting}/>
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

RequestCodeForm.propTypes={
    setCodeSent:PropTypes.func
}

