import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Field } from 'formik';

class KeyVerification extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Key Verification
                </Typography>
                <Typography>
                    Please enter second and eight key word from your seed word.
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <Field name="secondWord"
                            render={({ field, form: { touched, errors } }) =>
                                (<TextField {...field}
                                    id="second"                                   
                                    label="Second word"                                   
                                    name="secondWord"
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
                        <Field name="eightWord"
                            render={({ field, form: { touched, errors } }) =>
                                (<TextField {...field}
                                    id="eight"                                   
                                    name="eightWord"
                                    label="Eighth word"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    helperText={touched[field.name] ? errors[field.name] : ""}
                                    error={touched[field.name] && Boolean(errors[field.name])}
                                />)
                            }
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}
export default KeyVerification;