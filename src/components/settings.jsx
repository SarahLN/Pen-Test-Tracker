import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'path';
import UserSettingsStorage from '../utilities/user_setting_storage';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.userSettings = new UserSettingsStorage({
      configName: 'user-preferences',
      defaults: {
        data_folder: ''
      }
    });

    console.log(this.userSettings);

    this.state = {
      data_folder: this.userSettings.get('data_folder'),
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("new event occurred: " + event);
    this.setState({
      data_folder: event.target.value,
    });
  };

  handleSubmit(event) {
    alert('A data_folder was submitted: ' + this.state.data_folder);
    this.userSettings.set('data_folder', this.state.data_folder);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Settings</h2>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <TextField
            required
            id="outlined-full-width"
            label="Data Folder"
            value={this.state.data_folder}
            onChange={this.handleChange}
            style={{ margin: 8 }}
            helperText="Specify the folder where tool output will be picked up."
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        <Button variant="outlined" id="submit_button" type="submit">
            Submit
          </Button>
        </form>
      </div>
    )
  }
}

export default Settings;
