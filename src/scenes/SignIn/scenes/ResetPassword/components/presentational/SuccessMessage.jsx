import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import MLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';


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

const SuccessMessage = (props) => {
    let { classes } = props
    return (
        <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <DoneOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Reset password
              </Typography>
                <Typography>
                    Your password has been reset.
              </Typography>
                <Typography>
                    Click&nbsp;
                    <MLink component={Link} to="/Login">
                        here
                    </MLink>&nbsp;
                    to login with your new credentials.
                </Typography>
            </Paper>
        </main>
    )
}

SuccessMessage.propTypes = {
    classes: PropTypes.object
}


export default withStyles(styles)(SuccessMessage);