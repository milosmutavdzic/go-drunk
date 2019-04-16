import React, { Component } from 'react';
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
import { Field } from 'formik';


const styles = theme => ({
    root: {
        "max-width": "40em",
        margin: "40px auto auto auto"
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
        marginBottom: theme.spacing.unit * 2,
        'max-width:': theme.spacing.unit * 9,
    }
});

class ChangePasswordView extends Component {
    state = {
        showOldPassword: false,
        showNewPassword: false,
        showRepeatPassword: false,
    };
    handleClickShowOldPassword = () => {
        this.setState(state => ({ showOldPassword: !state.showOldPassword }));
    };
    handleClickShowNewPassword = () => {
        this.setState(state => ({ showNewPassword: !state.showNewPassword }));
    };
    handleClickShowRepeatPassword = () => {
        this.setState(state => ({ showRepeatPassword: !state.showRepeatPassword }));
    }

    render() {
        let {classes, isValid}= this.props;      
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" className={classes.title}>
                        Change Password
                    </Typography>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Field name="old_password"
                                render={({ field, form: { touched, errors } }) => (
                                    <TextField {...field}
                                        id="old_password"
                                        className={classNames(classes.margin, classes.textField)}
                                        variant="outlined"
                                        fullWidth
                                        type={this.state.showOldPassword ? "text" : "password"}
                                        label="old password"                                       
                                        helperText={touched[field.name] ? errors[field.name] : ""}
                                        error={touched[field.name] && Boolean(errors[field.name])}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        tabindex="-1"
                                                        aria-label="Toggle password visibility"
                                                        onClick={this.handleClickShowOldPassword}
                                                    >
                                                        {this.state.showOldPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                                <Visibility />
                                                            )}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                )} />

                        </Grid>
                        <Grid item xs={12}>
                            <Field name="new_password"
                                render={({ field, form: { touched, errors } }) => (
                                    <TextField {...field}
                                        id="new_password"
                                        className={classNames(classes.margin, classes.textField)}
                                        variant="outlined"
                                        fullWidth
                                        type={this.state.showNewPassword ? "text" : "password"}
                                        label="new password"
                                        helperText={touched[field.name] ? errors[field.name] : ""}
                                        error={touched[field.name] && Boolean(errors[field.name])}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        tabindex="-1"
                                                        aria-label="Toggle password visibility"
                                                        onClick={this.handleClickShowNewPassword}
                                                    >
                                                        {this.state.showNewPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                                <Visibility />
                                                            )}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field name="repeat_password"
                                render={({ field, form: { touched, errors } }) => (
                                    <TextField {...field}
                                        id="rpassword"
                                        className={classNames(classes.margin, classes.textField)}
                                        variant="outlined"
                                        fullWidth
                                        type={this.state.showRepeatPassword ? "text" : "password"}
                                        helperText={touched[field.name] ? errors[field.name] : ""}
                                        error={touched[field.name] && Boolean(errors[field.name])}
                                        label="repeat password"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        tabindex="-1"
                                                        aria-label="Toggle password visibility"
                                                        onClick={this.handleClickShowRepeatPassword}
                                                    >
                                                        {this.state.showRepeatPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                                <Visibility />
                                                            )}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />)}
                            />
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={!isValid}>
                            Change password
                        </Button>
                    </Grid>
                </Paper>
            </div>
        );
    }
}
ChangePasswordView.propTypes = {
    classes: PropTypes.object.isRequired,
    values: PropTypes.object,
    errors: PropTypes.object,
    touched: PropTypes.object,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    isValid: PropTypes.bool,
    setFieldTouched: PropTypes.func
};

export default withStyles(styles)(ChangePasswordView);
