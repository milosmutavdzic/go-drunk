import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import MLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Header from '../../../../../../components/presentational/Header.jsx';

function Login(props) {

  const {
    classes,
    values: { username, password },
    errors,
    touched,
    handleChange,
    handleSubmit,
    isValid,
    setFieldTouched,
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <main className={classes.main}>
      <Header/>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar src="./favicon.ico" className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <TextField
              id="username"
              name="username"
              helperText={touched.username ? errors.username : ""}
              error={touched.username && Boolean(errors.username)}
              label="Username"
              value={username}
              autoComplete="Username"
              onChange={(e) => change("username", e)}
              autoFocus
            />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <TextField
              id="password"
              name="password"
              type="password"
              helperText={touched.password ? errors.password : ""}
              error={touched.password && Boolean(errors.password)}
              label="Password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => change("password", e)}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <Typography>
              <MLink component={Link} to="/resetPassword">
                Forgot password?
            </MLink>
            </Typography>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <Typography>
              <MLink component={Link} to="/register">
                Sign Up
            </MLink>
            </Typography>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
            disabled={!isValid}
          >
            Login
          </Button>
        </form>
      </Paper>
    </main>
  );
}

Login.propTypes = {
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
    marginTop: theme.spacing.unit * 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
    width: 80,
    height: 80,
    padding: 10
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

export default withStyles(styles)(Login);