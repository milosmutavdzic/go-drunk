import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import Notifier, { openSnackbar } from '~/src/components/presentational/Notifier.jsx';
import * as Yup from 'yup';
// import { DisplayFormikState } from "~/src/components/presentational/DisplayFormikState.jsx";
import ChangePasswordView  from '../presentational/ChangePasswordView.jsx';
import { passwordService } from '../../services/password.service.js';

const validationSchema = Yup.object({
    old_password: Yup
        .string("")
        .min(8, "Password must contain at least 8 characters")
        .required("Enter old password"),
    new_password: Yup
        .string("")
        .min(8, "Password must contain at least 8 characters")
        .notOneOf([Yup.ref('old_password')],'New password must be different from old one!')
        .required("Enter new password"),
    repeat_password: Yup
        .string("")
        .oneOf([Yup.ref('new_password')], 'Passwords are not the same!')
        .required("Password confirmation is required"),
});


export default class ChangePassword extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmit = async (values, actions) => {
        try {
            let response = await passwordService.changePassword(values);
            console.log(response)
            if (response.status == "ok") {
                openSnackbar('Password successfully changed.', 'success', { vertical: 'bottom', horizontal: 'right' });
            }
            else {
                openSnackbar(response.error.errorMessage, 'error', { vertical: 'bottom', horizontal: 'right' });
            }
            actions.setSubmitting(false);
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        const values = { old_password: "", new_password: "", repeat_password: "" };      
        return (
            <React.Fragment>
                <Notifier />
                <Formik
                    initialValues={values}
                    validationSchema={validationSchema}
                    onSubmit={this.handleSubmit}
                    render={props => (
                        <Form>
                            <ChangePasswordView isValid={props.isValid} />
                            {/* <DisplayFormikState {...props} /> */}
                        </Form>)}
                />
            </React.Fragment>
        )
    }
}