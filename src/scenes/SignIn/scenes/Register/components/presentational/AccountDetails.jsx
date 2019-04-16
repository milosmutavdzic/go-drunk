import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Field } from 'formik';

function AccountDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Create an account
    </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Field name="email"
            render={({ field, form: { touched, errors } }) =>
              (<TextField {...field}
                id="outlined-email-input"
                label="e-mail"
                type="email"
                name="email"
                autoComplete="email"
                fullWidth
                margin="normal"
                variant="outlined"
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
                name="username"
                label="username"
                fullWidth
                margin="normal"
                variant="outlined"
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
                name="password"
                label="password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText={touched[field.name] ? errors[field.name] : ""}
                error={touched[field.name] && Boolean(errors[field.name])}
              />)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field name="passwordConfirmation"
            render={({ field, form: { touched, errors } }) =>
              (<TextField  {...field}
                id="passwordConfirmation"
                name="passwordConfirmation"
                label="confirm password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
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
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="fname"
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
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="lname"
                helperText={touched[field.name] ? errors[field.name] : ""}
                error={touched[field.name] && Boolean(errors[field.name])}
              />)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field name="companyName"
            render={({ field, form: { touched, errors } }) =>
              (<TextField {...field}
                required
                id="companyName"
                name="companyName"
                label="Company name"
                fullWidth               
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
                name="phone"
                label="Phone number"
                fullWidth               
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
                name="address"
                label="Address line"
                fullWidth
                autoComplete="billing address-line1"
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
                name="country"
                label="Country"
                fullWidth
                autoComplete="billing country"
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
                name="city"
                label="City"
                fullWidth
                autoComplete="billing address-level2"
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
      </Grid>
    </React.Fragment>
  );
}
AccountDetails.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default AccountDetails;
