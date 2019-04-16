import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import { Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Form } from 'formik';

const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
  });

class ConfirmationView extends Component {

    render() {
        let { classes, isValid, isSubmitting } = this.props;
        return (
            <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Reset password
              </Typography>
              <Typography>
                Please check your email for the confirmation code.
              </Typography>
              <Form className={classes.form}>
                    <Grid container spacing={8}>
                        <Grid item sm={12}>
                            <Field name="code"
                                render={({ field, form: { touched, errors } }) =>
                                    (<TextField {...field}                                        
                                        label="confirmation code"
                                        type="text"                                                                              
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        helperText={touched[field.name] ? errors[field.name] : ""}
                                        error={touched[field.name] && Boolean(errors[field.name])}
                                    />)
                                }
                            />
                        </Grid>
                        <Grid item sm={12}>
                            <Field name="new_password"
                                render={({ field, form: { touched, errors } }) =>
                                    (<TextField {...field}                                       
                                        label="new password"
                                        type="password"                                                                          
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        helperText={touched[field.name] ? errors[field.name] : ""}
                                        error={touched[field.name] && Boolean(errors[field.name])}
                                    />)
                                }
                            />
                        </Grid>
                        <Grid item sm={12}>
                            <Field name="repeat_password"
                                render={({ field, form: { touched, errors } }) =>
                                    (<TextField {...field}                                        
                                        label="password confirmation"
                                        type="password"                                                                           
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        helperText={touched[field.name] ? errors[field.name] : ""}
                                        error={touched[field.name] && Boolean(errors[field.name])}
                                    />)
                                }
                            />
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={!isValid || isSubmitting}>
                            Confirm Password
                        </Button>
                    </Grid>                        
                    </Form>
                </Paper>  
            </main>         
        )
    }
}

ConfirmationView.propTypes = {
    classes: PropTypes.object,
    isValid: PropTypes.bool,
    isSubmitting: PropTypes.bool
}

export default withStyles(styles)(ConfirmationView);