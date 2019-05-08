import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Switch } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import MapWrapper from '../../scenes/Main/components/presentational/MapWrapper.jsx';
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
    height: '100vh',
    overflow: 'hidden',
    '& div:not([class])>div::first-child': {
      height: 'calc(100vh - 200px) !important',
    }
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
          <PrivateRoute exact path="/" component={MapWrapper} />
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