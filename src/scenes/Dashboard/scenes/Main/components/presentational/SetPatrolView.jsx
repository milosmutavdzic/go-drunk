import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    formControl: {
      margin: theme.spacing.unit,
      marginBottom: 20,
      minWidth: 180,
    },
  });
  
class SetPatrolView extends Component {
  state = {
    patrolType: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { classes, marker, addPatrol } = this.props;
    const { patrolType } = this.state;
    return (
      <div>
        <Typography variant="h6">Choose patrol type</Typography>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="patrolType"
          >
            Patrol type
          </InputLabel>
          <Select
            input={
              <OutlinedInput
                labelWidth={120}
                name="patrolType"
                id="patrolType"
                onChange={ this.handleChange }
                value={ patrolType }
              />
            }
          >
            <MenuItem value={false}>Alcohol test</MenuItem>
            <MenuItem value={true}>Speed test</MenuItem>
          </Select>
        </FormControl>
        <Button 
          variant="contained"
          color="primary"
          fullWidth
          disabled = { patrolType === '' }
          onClick = {() => addPatrol( {...marker, patrol_type: patrolType})}
          >
          REPORT
        </Button>
      </div>
    )
  }
}

SetPatrolView.propTypes = {
    classes: PropTypes.object.isRequired,
    marker: PropTypes.object.isRequired,    
    addPatrol: PropTypes.func.isRequired,    
  };

export default withStyles(styles)(SetPatrolView);
