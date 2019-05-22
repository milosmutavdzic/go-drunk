import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from './scenes/SignIn/scenes/Login/components/container/LoginForm.jsx';
import Dashboard from './scenes/Dashboard/components/presentational/Dashboard.jsx';
import PrivateRoute from "./components/container/PrivateRoute.jsx";
import RegistrationForm from "./scenes/SignIn/scenes/Register/components/container/RegistrationForm.jsx";
import ResetPasswordForm from "./scenes/SignIn/scenes/ResetPassword/components/container/ResetPasswordForm.jsx";

class App extends Component {
  
  render() {    
    return (
      <Router>
        <div>
        <Switch>
        {/* <Route path="/Test" component={Test}/> */}
        <Route path="/register" component={RegistrationForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/resetPassword" component={ResetPasswordForm} />
        <PrivateRoute path="/" component={Dashboard} />                
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
