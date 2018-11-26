import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DB_Connection from './db_connection';
import MUIDataTable from "mui-datatables";

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
            [
              this.state.results_data[0][i].ip_addr,
              this.state.results_data[0][i].port_num,
              this.state.results_data[0][i].protocol,
              this.state.results_data[0][i].name,
              this.state.results_data[0][i].product,
              this.state.results_data[0][i].version
            ]
          );
        }
        return children;
    }
  }

  render() {
    const columns = ['IP Address', 'Port', 'Protocol', 'Service', 'Product', 'Version'];
    const data = this.create_table();
    const options = {
      filter: true,
      filterType: 'multiselect',
      resizableColumns: true,
      print: false
    };
    return (
      <MUIDataTable
        title={'Discovered Assets'}
        data = { data }
        columns = { columns }
        options = { options }
      />
    )
  }
}

export default ResultsGrid;
