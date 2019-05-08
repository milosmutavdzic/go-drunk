import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from "yup";
import Registration from '../presentational/Registration.jsx';
// import SuccessMessage from '../../../../../../components/presentational/SuccessMessage.jsx';
import Loader from '../../../../../../components/presentational/Loader.jsx';
import Notifier, { openSnackbar } from '~/src/components/presentational/Notifier.jsx';


import { registerActions } from '../../actions/register.actions'
import SuccessMessage from '../../../../../../components/presentational/SuccessMessage.jsx';


const phoneRegex = /^[0-9()-]+$/;

class RegistrationForm extends Component {

  constructor(props) {
    super(props);
  }

  submitValues = ( values ) => {
    let {register} = this.props;
    register( values , function (error) {
      openSnackbar(error, 'error', { vertical: 'top', horizontal: 'right' });
    });
  }

  Schema = Yup.object().shape({
    email: Yup
      .string()
      .email("Email is not valid!")
      .required("Email is required!"),
    username: Yup
      .string()
      .required("Username is required!"),
    password: Yup
      .string()
      .min(8, 'Password has to be longer than 8 characters!')
      .required("Password is required"),
      confirmPassword: Yup
      .string()
      .oneOf([Yup.ref('password')], 'Passwords are not the same!')
      .required("Password confirmation is required"),
    firstName: Yup
      .string()
      .required("First name is required"),
    lastName: Yup
      .string()
      .required("Last name is required"),
    address: Yup
      .string()
      .required("Address is required"),
    city: Yup
      .string()
      .required("City is required"),
    country: Yup
      .string()
      .required("Country is required"),
    phone: Yup
      .string()
      .matches(phoneRegex, 'Phone number is not valid')
      .required("Phone number is required")
  });

  values = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
  }

  render() {
    const {error, loading } = this.props;
    console.log(error, loading);
    if (loading) return (<Loader/>);
    if (loading === false && error === undefined) return (
      <SuccessMessage
      title = "Registration"
      info = "You have successfully registered! "
      redirectLinkInfo = "to go to login page"
      />);
    return (
      <React.Fragment>
        <Notifier />
        <Formik
          onSubmit={this.submitValues}
          initialValues={this.values}
          validationSchema={this.Schema}
          render={props => <Registration {...props} error={error} />} />
      </React.Fragment>

    );
  }
}

RegistrationForm.propTypes = {
  register: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool,
}

const mapStateToProps = state => {
  return {
      error: state.reg.error,
      loading: state.reg.loading,
  }
}
const mapDispatchToProps = {  
  register: (values, errorHandler) => registerActions.register(values, errorHandler)       
}
export default connect(mapStateToProps,mapDispatchToProps)(RegistrationForm);
