import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const styles = theme => ({
  root: {
    "max-width": "60em",
    margin: "60px auto auto auto"
  },
  title: {
    "margin-bottom": "40px",
    color: "#3f51b5"
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  form: {
    'max-width:': '90%',
    marginTop: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 200
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    'max-width:': theme.spacing.unit * 9,
  }
});

class ResetPassword extends React.Component {
  state = {
    showPassword: false,
    showRPassword: false
  };
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  handleClickShowRPassword = () => {
    this.setState(state => ({ showRPassword: !state.showRPassword }));
  };

  render() {
    const { 
      classes,
      values: { password, rpassword },
      errors,
      touched,
      handleChange,
      handleSubmit,
      isValid,
      setFieldTouched, } = this.props;

    const change = (name, e) => {
      e.persist();
      handleChange(e);
      setFieldTouched(name, true, false);
    };
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h5" className={classes.title}>
            Reset Password
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="password"
                  className={classNames(classes.margin, classes.textField)}
                  variant="outlined"
                  fullWidth
                  type={this.state.showPassword ? "text" : "password"}
                  label="new password"
                  helperText={touched.password?errors.password:""}
                  error={touched.password && Boolean(errors.password)}
                  value={password}
                  onChange={(e)=>change("password",e)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                        >
                          {this.state.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="rpassword"
                  className={classNames(classes.margin, classes.textField)}
                  variant="outlined"
                  fullWidth
                  type={this.state.showRPassword ? "text" : "password"}
                  helperText={touched.rpassword?errors.rpassword:""}
                  error={touched.rpassword && Boolean(errors.rpassword)}
                  label="repeat password"
                  value={rpassword}
                  onChange={(e)=>change("rpassword",e)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowRPassword}
                        >
                          {this.state.showRPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={!isValid}
              >
                RESET
              </Button>
          </Grid>
          </form>
        </Paper>
      </div>
    );
  }
}
ResetPassword.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isValid: PropTypes.bool,
  setFieldTouched: PropTypes.func
};

export default withStyles(styles)(ResetPassword);
