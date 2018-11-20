import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import DB_Connection from './db_connection';

class FilterItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      port_data: 0
    };
    this.get_data = this.get_data.bind(this);
    this.save_data = this.save_data.bind(this);
  };

  save_data(results) {
    this.setState({ port_data: results });
  }

  get_data() {
    var result = null;
    let conn = new DB_Connection();
    return conn.run_query('SELECT * FROM pentestdb.port;', this.save_data);
  };

  render() {
    var test = this.get_data();
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
            <FormControlLabel
              control={
                <Checkbox  value="3389" />
              }
              label="3389"
            />
          </FormGroup>
          <FormHelperText>Filter results here.</FormHelperText>
        </FormControl>
      </div>
    )
  }
}

export default FilterItem;
