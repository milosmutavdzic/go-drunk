import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
  });
  
class SetPatrolView extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="patrol-type"
          >
            Patrol type
          </InputLabel>
          <Select
            input={
              <OutlinedInput
                labelWidth={120}
                name="patrol-type"
                id="patrol-type"
              />
            }
          >
            <MenuItem value={false}>Alcohol test</MenuItem>
            <MenuItem value={true}>Speed test</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }
}

SetPatrolView.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SetPatrolView);
