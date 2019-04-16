import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Switch } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {MainPanel} from '../../scenes/Main/components/presentational/MainPanel.jsx';
import {Search} from '../../scenes/Search/components/presentational/Search.jsx';
import {Payments} from '../../scenes/Payments/components/presentational/Payments.jsx';
import {Campaign} from '../../scenes/Campaign/components/presentational/Campaign.jsx';
import Profile from '../../scenes/Profile/components/container/Profile.jsx';
import PrivateRoute from "../../../../components/container/PrivateRoute.jsx";
import DashboardBar from "./DashboardBar.jsx";
import ChangePassword from "../../scenes/ChangePassword/components/container/ChangePassword.jsx"


const styles = theme => ({
  root: {
    display: 'flex',
  },     
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
  appBarSpacer: theme.mixins.toolbar
});

class Dashboard extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />    
        <DashboardBar/>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Switch>
          <PrivateRoute exact path="/" component={()=><MainPanel classes={classes}/>} />
          <PrivateRoute path="/Search" component={Search} />
          <PrivateRoute path="/Campaign" component={Campaign} />
          <PrivateRoute path="/Payments" component={Payments} />
          <PrivateRoute path="/Profile" component={Profile}/>  
          <PrivateRoute path="/ChangePassword" component={ChangePassword}/>  
          </Switch>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);