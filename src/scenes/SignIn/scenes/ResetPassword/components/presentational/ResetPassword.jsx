import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

class ResetPassword extends React.Component {
  state = {
    showOldPassword: false,
    showPassword: false,
    showRPassword: false
  };
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showOldPassword }));
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
      values: { username, oldpassword, password, rpassword },
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
          <form onSubmit={handleSubmit}>
            <Grid container spacing={24} >
              <Grid item xs={12}>
                <TextField
                  id="username"
                  variant="outlined"
                  fullWidth
                  type={"text"}
                  label="username"
                  helperText={touched.username ? errors.username : ""}
                  error={touched.username && Boolean(errors.username)}
                  value={username}
                  onChange={(e) => change("username", e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="oldpassword"
                  variant="outlined"
                  fullWidth
                  type={this.state.showPassword ? "text" : "password"}
                  label="old password"
                  helperText={touched.oldpassword ? errors.oldpassword : ""}
                  error={touched.oldpassword && Boolean(errors.oldpassword)}
                  value={oldpassword}
                  onChange={(e) => change("oldpassword", e)}
                  InputProps={{
                    className:classes.amountField,
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
              <Grid item xs={12}>
                <TextField
                  id="password"
                  variant="outlined"
                  fullWidth
                  type={this.state.showPassword ? "text" : "password"}
                  label="new password"
                  helperText={touched.password ? errors.password : ""}
                  error={touched.password && Boolean(errors.password)}
                  value={password}
                  onChange={(e) => change("password", e)}
                  InputProps={{
                    className:classes.amountField,
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
              <Grid item xs={12}>
                <TextField
                  id="rpassword"
                  variant="outlined"
                  fullWidth
                  type={this.state.showRPassword ? "text" : "password"}
                  helperText={touched.rpassword ? errors.rpassword : ""}
                  error={touched.rpassword && Boolean(errors.rpassword)}
                  label="repeat password"
                  value={rpassword}
                  onChange={(e) => change("rpassword", e)}
                  InputProps={{
                    className:classes.amountField,
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
              <Grid item xs={12}>
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

const styles = theme => ({
  root: {
    maxWidth: '60em',
    margin: '60px auto auto auto'
  },
  title: {
    'margin-bottom': '40px',
    color: '#3f51b5'
  },
  paper: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 4
  },
  amountField: {
    boxSizing: 'border-box',
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  }
});

export default withStyles(styles)(ResetPassword);
