import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from '../../../../../../components/presentational/Header.jsx';
import { Field } from 'formik';


class Registration extends Component {

  render() {
    const {
      classes,
      values: { email, username, password, confirmPassword, firstName, lastName, phone, address, city, country },
      handleChange,
      handleSubmit,
      isValid,
      setFieldTouched } = this.props;

    const change = (name, e) => {
      e.persist();
      handleChange(e);
      setFieldTouched(name, true, false);
    };
    return (
      <React.Fragment>
        <Header />
        <Paper className={classes.root}>
          <Typography variant="h6" gutterBottom>
            Create an account
        </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <Field name="email"
                  render={({ field, form: { touched, errors } }) =>
                    (<TextField {...field}
                      id="outlined-email-input"
                      value={email}
                      label="e-mail"
                      type="email"
                      name="email"
                      autoComplete="email"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      onChange={(e) => change("email", e)}
                      helperText={touched[field.name] ? errors[field.name] : ""}
                      error={touched[field.name] && Boolean(errors[field.name])}
                    />)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="username"
                  render={({ field, form: { touched, errors } }) =>
                    (<TextField  {...field}
                      id="username"
                      value={username}
                      name="username"
                      label="username"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      onChange={(e) => change("username", e)}
                      helperText={touched[field.name] ? errors[field.name] : ""}
                      error={touched[field.name] && Boolean(errors[field.name])}
                    />)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="password"
                  render={({ field, form: { touched, errors } }) =>
                    (<TextField  {...field}
                      id="password"
                      value={password}
                      name="password"
                      label="password"
                      type="password"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      onChange={(e) => change("password", e)}
                      helperText={touched[field.name] ? errors[field.name] : ""}
                      error={touched[field.name] && Boolean(errors[field.name])}
                    />)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="confirmPassword"
                  render={({ field, form: { touched, errors } }) =>
                    (<TextField  {...field}
                      id="confirmPassword"
                      value={confirmPassword}
                      name="confirmPassword"
                      label="confirm password"
                      type="password"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      onChange={(e) => change("confirmPassword", e)}
                      helperText={touched[field.name] ? errors[field.name] : ""}
                      error={touched[field.name] && Boolean(errors[field.name])}
                    />)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="firstName"
                  render={({ field, form: { touched, errors } }) =>
                    (<TextField {...field}
                      required
                      id="firstName"
                      value={firstName}
                      name="firstName"
                      label="First name"
                      fullWidth
                      autoComplete="fname"
                      onChange={(e) => change("firstName", e)}
                      helperText={touched[field.name] ? errors[field.name] : ""}
                      error={touched[field.name] && Boolean(errors[field.name])}
                    />)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="lastName"
                  render={({ field, form: { touched, errors } }) =>
                    (<TextField {...field}
                      required
                      value={lastName}
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      fullWidth
                      autoComplete="lname"
                      onChange={(e) => change("lastName", e)}
                      helperText={touched[field.name] ? errors[field.name] : ""}
                      error={touched[field.name] && Boolean(errors[field.name])}
                    />)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="phone"
                  render={({ field, form: { touched, errors } }) =>
                    (<TextField {...field}
                      required
                      id="phone"
                      value={phone}
                      name="phone"
                      label="Phone number"
                      fullWidth
                      onChange={(e) => change("phone", e)}
                      helperText={touched[field.name] ? errors[field.name] : ""}
                      error={touched[field.name] && Boolean(errors[field.name])}
                    />)}
                />
              </Grid>
              <Grid item xs={12}>
                <Field name="address"
                  render={({ field, form: { touched, errors } }) =>
                    (<TextField {...field}
                      required
                      id="address"
                      value={address}
                      name="address"
                      label="Address line"
                      fullWidth
                      autoComplete="billing address-line1"
                      onChange={(e) => change("address", e)}
                      helperText={touched[field.name] ? errors[field.name] : ""}
                      error={touched[field.name] && Boolean(errors[field.name])}
                    />)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="country"
                  render={({ field, form: { touched, errors } }) =>
                    (<TextField {...field}
                      required
                      id="country"
                      value={country}
                      name="country"
                      label="Country"
                      fullWidth
                      autoComplete="billing country"
                      onChange={(e) => change("country", e)}
                      helperText={touched[field.name] ? errors[field.name] : ""}
                      error={touched[field.name] && Boolean(errors[field.name])}
                    />)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="city"
                  render={({ field, form: { touched, errors } }) =>
                    (<TextField {...field}
                      required
                      id="city"
                      value={city}
                      name="city"
                      label="City"
                      fullWidth
                      autoComplete="billing address-level2"
                      onChange={(e) => change("city", e)}
                      helperText={touched[field.name] ? errors[field.name] : ""}
                      error={touched[field.name] && Boolean(errors[field.name])}
                    />)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  {"By creating your account, you agree to our"} <Link to="/Terms">Terms of Services</Link>
                </Typography>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={!isValid}
              >
                CREATE ACCOUNT
              </Button>
            </Grid>
          </form>
        </Paper>
      </React.Fragment>
    );
  }
}

Registration.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isValid: PropTypes.bool,
  setFieldTouched: PropTypes.func
};

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
  }
});

export default withStyles(styles)(Registration);
