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
        backgroundColor: theme.palette.primary.main,
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
    let { classes, title, info, redirectLink, redirectLinkInfo } = props
    return (
        <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <DoneOutlinedIcon />
                </Avatar>
                <Typography variant="h5" gutterBottom>
                    {title}
              </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    {info}
              </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Click&nbsp;
                    <MLink component={Link} to={redirectLink ? redirectLink : "/login"}>
                        here
                    </MLink>&nbsp;
                    {redirectLinkInfo}
                </Typography>
            </Paper>
        </main>
    )
}

SuccessMessage.propTypes = {
    classes: PropTypes.object,
    title: PropTypes.string,
    info: PropTypes.string,
    redirectLink: PropTypes.string,
    redirectLinkInfo: PropTypes.string
}


export default withStyles(styles)(SuccessMessage);