import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DB_Connection from './db_connection';

class ResultsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results_data: 0
    };
    this.get_data = this.get_data.bind(this);
    this.save_data = this.save_data.bind(this);
    this.create_table = this.create_table.bind(this);
  }

  componentDidMount() {
    this.get_data();
  }

  save_data(results) {
    this.setState({ results_data: results });
  }

  get_data() {
    var result = null;
    let conn = new DB_Connection();
    return conn.run_query('CALL pentestdb.get_result_grid();', this.save_data);
  };

  create_table() {
    // Loop to create children
    if (this.state.results_data == 0) {
      // I put this here so it doesn't fail when the function is called the first time.
      // The second time (after componentDidMount is called) it will go to the
      // else condition and everything will be fine.
      console.log('state not yet set');
    } else {
        let children = [];
        for (let i=0; i < this.state.results_data[0].length; i++) {
          children.push(
            <TableRow key={this.state.results_data[0][i].id}>
              <TableCell>{this.state.results_data[0][i].ip_addr}</TableCell>
              <TableCell>{this.state.results_data[0][i].port_num}</TableCell>
              <TableCell>{this.state.results_data[0][i].protocol}</TableCell>
              <TableCell>{this.state.results_data[0][i].name}</TableCell>
              <TableCell>{this.state.results_data[0][i].product}</TableCell>
              <TableCell>{this.state.results_data[0][i].version}</TableCell>
            </TableRow>
          );
        }
        return children;
    }
  }

  render() {
    return (
      <Table className="resultsTable">
        <TableHead>
          <TableRow>
            <TableCell>IP Address</TableCell>
            <TableCell>Port</TableCell>
            <TableCell>Protocol</TableCell>
            <TableCell>Service</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Version</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.create_table()}
        </TableBody>
      </Table>
    )
  }
}

export default ResultsGrid;
