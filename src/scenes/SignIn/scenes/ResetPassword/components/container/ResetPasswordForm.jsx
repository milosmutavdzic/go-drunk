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
  
    submitValues = ({ password, rpassword }) => {              
        let {resetPass} = this.props;
        resetPass(password,rpassword, function(error){
            openSnackbar(error.message,'error',{vertical:'top',horizontal:'right'});
        });       
    }

    render(){
        const {error} = this.props
        const values = {  password: "", rpassword: "" };
        return (
            <React.Fragment>
                <Notifier/>
                <Formik
                    render={props => <ResetPassword {...props} error={error} />}
                    initialValues={values}
                    validationSchema={validationSchema}
                    onSubmit={this.submitValues} />
            </React.Fragment>
        );
        
    }
}

const validationSchema = Yup.object({
    password: Yup.string("")
    .min(8, "Password must contain at least 8 characters")
    .required("Enter new password"),
    rpassword: Yup.string("")
        .min(8, "Password must contain at least 8 characters")
        .required("Repeat password")
});

ResetPasswordForm.propTypes = {
    resetPass: PropTypes.func,
    error: PropTypes.object,
}

const mapStateToProps = state => {
    return {
        error: state.resetPassActions ? state.resetPassActions.error : null  
    }
}
const mapDispatchToProps = {  
    resetPass: (password, rpassword, errorHandler) => resetPassActions.resetPass(password, rpassword, errorHandler)       
  }

export default connect(mapStateToProps,mapDispatchToProps)(ResetPasswordForm);



