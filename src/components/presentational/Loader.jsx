import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  progress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    "margin-right": "-50%",
  },
};

function Loader(props) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress size = {120} className={classes.progress} />
    </div>
  );
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loader);