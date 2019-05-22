import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import ResetPassword from '../presentational/ResetPassword.jsx';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Notifier, { openSnackbar } from '../../../../../../components/presentational/Notifier.jsx';
import { resetPassActions } from '../../actions/resetPass.actions';

class ResetPasswordForm extends Component {

    constructor(props) {
        super(props);
      }
  
    submitValues = ({ username, oldpassword, password, rpassword }) => {              
        let {resetPass} = this.props;
        resetPass( { username, oldpassword, password, rpassword },
            function(success){
                openSnackbar(success.message,'success',{vertical:'top',horizontal:'right'});
            },
            function(error){
            openSnackbar(error.message,'error',{vertical:'top',horizontal:'right'});
        });       
    }

    render(){
        const values = {
            username: "",
            oldpassword: "",
            password: "",
            rpassword: ""
        };
        return (
            <React.Fragment>
                <Notifier/>
                <Formik
                    render={props => <ResetPassword {...props} />}
                    initialValues={values}
                    validationSchema={validationSchema}
                    onSubmit={this.submitValues} />
            </React.Fragment>
        );
        
    }
}

const validationSchema = Yup.object({
    username: Yup.string("")
    .min(5, "Username must contain at least 5 characters")
    .required("Enter username"),
    oldpassword: Yup.string("")
    .min(8, "Password must contain at least 8 characters")
    .required("Enter old password"),
    password: Yup.string("")
    .min(8, "Password must contain at least 8 characters")
    .notOneOf([Yup.ref('oldpassword')],'New password must be different from old one!')
    .required("Enter new password"),
    rpassword: Yup.string("")
    .min(8, "Password must contain at least 8 characters")
    .oneOf([Yup.ref('password')], 'Passwords are not the same!')
    .required("Repeat password")
});

ResetPasswordForm.propTypes = {
    resetPass: PropTypes.func
}

const mapDispatchToProps = {  
    resetPass: (resetPassData, successHandler, errorHandler) => resetPassActions.resetPass(resetPassData, successHandler, errorHandler)       
  }

export default connect(null,mapDispatchToProps)(ResetPasswordForm);



