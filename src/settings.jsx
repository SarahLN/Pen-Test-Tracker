import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Settings</h2>
        <TextField
          required
          id="outlined-full-width"
          label="Data Folder"
          style={{ margin: 8 }}
          helperText="Specify the folder where tool output will be picked up."
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    )
  }
}

export default Settings;
