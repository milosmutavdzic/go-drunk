import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import amber from '@material-ui/core/colors/amber';
import AccountDetails from './AccountDetails.jsx';
import GenerteKey from './GenerateKey.jsx';
import KeyVerification from './KeyVerification.jsx';
import EmailVerification from './EmailVerification.jsx';
import { Formik, Form } from "formik";
import {phoneRegExp} from '../../../../../../helpers/regexp.js';
// import { DisplayFormikState } from "../../../../../../components/presentational/DisplayFormikState.jsx";
import * as Yup from "yup";


const styles = theme => ({
  root: {
    width: '90%',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(800 + theme.spacing.unit * 2 * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  register: {
    'background-color': '#F7F7F7'
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  }, message: {
    display: 'flex',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Create an account', 'Let\'s generte your key!', 'Key Verification', 'You are just one step away'];
}

function getStepContent(step, classes, setFieldValue) {
  switch (step) {
    case 0:
      return <AccountDetails classes={classes} />
    case 1:
      return <GenerteKey setFieldValue={setFieldValue} classes={classes} />
    case 2:
      return <KeyVerification classes={classes} />
    case 3:
      return <EmailVerification classes={classes} />
    default:
      return 'Unknown step';
  }
}

class RegistrationWizard extends Component {
  state = {
    activeStep: 0,
  };

  handleNext = (props) => {
    props.submitForm().then(() => {
      if (props.isValid) {
        this.setState(state => ({
          activeStep: state.activeStep + 1,
        }));
        props.validateForm();
        props.setTouched({});
      }
    });
  };

  handleBack = (props) => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
    props.validateForm();
    props.setTouched({});
  };

  handleSubmit = (values, formikbag) => {
    // do stuff
    setTimeout(() => {
      formikbag.setSubmitting(false);
    }, 1000);
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };
  
  Step1Schema = Yup.object().shape({
    email: Yup
      .string()
      .email("Email is not valid!")
      .required("Email is required!"),
    username: Yup
      .string()
      .required("Username is required!"),
    password: Yup
      .string()
      .min(8, 'Password has to be longer than 8 characters!')
      .required("Password is required"),
    passwordConfirmation: Yup
      .string()
      .oneOf([Yup.ref('password')], 'Passwords are not the same!')
      .required("Password confirmation is required"),
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
    companyName: Yup
      .string()
      .required("Company name is required"),
    phone: Yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required("Phone number is required")
  });

  Step2Schema = Yup.object().shape({
    seedWords: Yup
      .string()
      .required("Seed words are required"),
    privateKey: Yup
      .string()
      .required("Private key is required")
  });

  Step3Schema = Yup.object().shape({
    seedWords: Yup
      .string()
      .required("Seed words are required"),
    secondWord: Yup
      .string()
      .test('matchSecondWord', 'Second word doesn\'t match.', function (secondWord) {
        return secondWord === this.parent.seedWords.split(" ")[1];
      })
      .required("Second word is required"),
    eightWord: Yup
      .string()
      .test('matchEightWord', 'Eight word doesn\'t match.', function (eightWord) {
        return eightWord === this.parent.seedWords.split(" ")[7];
      })
      .required("Eight word is required")
  });

  Step4Schema = Yup.object().shape({
  });

  schemaArray = [this.Step1Schema, this.Step2Schema, this.Step3Schema, this.Step4Schema]

  formInitialValues = {
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    seedWords: "",
    privateKey: "",
    secondWord: "",
    eightWord: ""
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Registration
          </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Registration completed.
                </Typography>
                  <Typography variant="subtitle1">
                    You are successfully registered. We have emailed you with confirmation link, please check your email.
                </Typography>
                </React.Fragment>
              ) : (
                  <Formik
                    onSubmit={this.handleSubmit}
                    enableReinitialize
                    initialValues={this.formInitialValues}
                    validationSchema={this.schemaArray[activeStep]}
                    render={props => (
                      <Form>
                        {getStepContent(activeStep, classes, props.setFieldValue)}
                        <div className={classes.buttons}>
                          {activeStep !== 0 && (
                            <Button onClick={() => this.handleBack(props)} className={classes.button}>
                              Back
                              </Button>
                          )}
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.handleNext(props)}
                            className={classes.button} disabled={!props.isValid}
                          >
                            {
                              activeStep === 0 ? 'Let\'s start' :
                                activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                          </Button>
                        </div>
                        {/* <DisplayFormikState {...props} /> */}
                      </Form>
                    )} />
                )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

RegistrationWizard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(RegistrationWizard);
