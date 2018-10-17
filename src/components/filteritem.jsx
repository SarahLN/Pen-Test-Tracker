import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

class FilterItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FormControl component="fieldset" className="filteritem">
          <FormLabel component="legend">Ports</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox  value="22" />
              }
              label="22"
            />
            <FormControlLabel
              control={
                <Checkbox  value="80" />
              }
              label="80"
            />
            <FormControlLabel
              control={
                <Checkbox  value="443" />
              }
              label="443"
            />
          </FormGroup>
          <FormHelperText>Filter results here.</FormHelperText>
        </FormControl>
      </div>
    )
  }
}

export default FilterItem;
