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
    this.create_form = this.create_form.bind(this);
  };

  componentDidMount() {
    this.get_data();
  }

  save_data(results) {
    this.setState({ port_data: results });
  }

  get_data() {
    var result = null;
    let conn = new DB_Connection();
    return conn.run_query('SELECT * FROM pentestdb.port;', this.save_data);
  };

  create_form() {
    // Loop to create children
    let children = [];
    for (let i=0; i < this.state.port_data.length; i++) {
      children.push(<FormControlLabel
        control={
          <Checkbox  value={this.state.port_data[i].port_num} />
        }
        key={this.state.port_data[i].port_id}
        label={this.state.port_data[i].port_num}
      />);
    }
    return children;
  }

  render() {
    return (
      <div>
        <FormControl component="fieldset" className="filteritem">
          <FormLabel component="legend">Ports</FormLabel>
          <FormGroup>
            {this.create_form()}
          </FormGroup>
          <FormHelperText>Filter results here.</FormHelperText>
        </FormControl>
      </div>
    )
  }
}

export default FilterItem;
