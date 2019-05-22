import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Formik, Form } from 'formik';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { phoneRegExp } from '../../../../../../helpers/regexp.js';
import * as Yup from "yup";


class ProfileView extends Component {

    constructor(props) {
        super(props)
    }

    ValidationSchema = Yup.object().shape({
        email: Yup
            .string()
            .email("Email is not valid!")
            .required("Email is required!"),
        username: Yup
            .string()
            .required("Username is required!"),
        firstName: Yup
            .string()
            .required("First name is required"),
        lastName: Yup
            .string()
            .required("Last name is required"),
        address: Yup
            .string()
            .required("Address is required"),
        city: Yup
            .string()
            .required("City is required"),
        country: Yup
            .string()
            .required("Country is required"),
        phone: Yup
            .string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required("Phone number is required")
    });

    render() {
        const {
            profile = {
                email: "",
                username: "",
                firstName: "",
                lastName: "",
                address: "",
                phone: "",
                city: "",
                country: ""
            }, handleSubmit, classes } = this.props;
        return (
            <Paper className={classes.main}>
                <Typography variant="h5" component="h2">
                    Edit Profile
            </Typography>
                <Formik onSubmit={handleSubmit}
                    enableReinitialize={true}
                    initialValues={profile}
                    isInitialValid={true}
                    validationSchema={this.ValidationSchema}
                    render={props => (
                        <Form>
                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={6}>
                                    <Field name="email"
                                        render={({ field, form: { touched = true, errors } }) =>
                                            (<TextField {...field}
                                                id="outlined-email-input"
                                                label="e-mail"
                                                type="email"
                                                name="email"
                                                autoComplete="email"
                                                fullWidth
                                                disabled={true}
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
                                                disabled={true}
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
                                    <Button type="submit" variant="contained" color="primary" disabled={!props.isValid || props.isSubmitting}>
                                        Save
                            </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )} />
            </Paper>)
    }
}

ProfileView.propTypes = {
    profile: PropTypes.object,
    classes: PropTypes.object,
    handleSubmit: PropTypes.func
}
const styles = theme => ({
    main: {
        marginTop: 4 * theme.spacing.unit,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 4 * theme.spacing.unit,
        width: '90vw',
        height: '60vh'
    }
});

export default withStyles(styles)(ProfileView);