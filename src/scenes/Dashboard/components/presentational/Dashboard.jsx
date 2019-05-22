import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Switch } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import MapWrapper from '../../scenes/Main/components/container/MapWrapper.jsx';
import Profile from '../../scenes/Profile/components/container/Profile.jsx';
import PrivateRoute from '../../../../components/container/PrivateRoute.jsx';
import DashboardBar from './DashboardBar.jsx';

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
          <PrivateRoute path="/profile" component={Profile}/>  
          </Switch>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    display: 'flex',
  },     
  content: {
    flexGrow: 1,
    height: '100vh'
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

export default withStyles(styles)(Dashboard);