import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Login from '../presentational/Login.jsx';
import * as Yup from 'yup';
import { Redirect } from "react-router-dom";
import Notifier, { openSnackbar } from '~/src/components/presentational/Notifier.jsx';


import {authActions} from '../../actions/auth.actions';

class LoginForm extends Component {

    constructor(props) {
        super(props);
      }
  
    submitValues = ({ username, password }) => {              
        let {login} = this.props;
        login(username,password,function(error){            
            openSnackbar(error.message,'error',{vertical:'top',horizontal:'right'});
        });       
    }

    render(){
        const {isAuthenticated} = this.props
        const {error} = this.props
        const { from } = this.props.location.state || { from: { pathname: '/' } }        
        if(isAuthenticated){             
           return(                        
            <Redirect exact to={from}/>
           );
        }
        else{
        const values = { username: "", password: "" };
        return (
            <React.Fragment>
                <Notifier/>
                <Formik
                    render={props => <Login {...props} error={error} />}
                    initialValues={values}
                    validationSchema={validationSchema}
                    onSubmit={this.submitValues} />
            </React.Fragment>
        );
        }
    }
}

const validationSchema = Yup.object({
    username: Yup.string("Enter username")
        .required("Username is required"),
    password: Yup.string("")
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password")
});

LoginForm.propTypes = {
    login: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object,
    location: PropTypes.shape({
        state: PropTypes.object
    })
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.auth.error      
    }
}
const mapDispatchToProps = {  
    login: (username,password,errorHandler) => authActions.login(username,password,errorHandler)       
  }

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);



