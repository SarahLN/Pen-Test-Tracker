import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ResultsGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table className="resultsTable">
        <TableHead>
          <TableRow>
            <TableCell>Hostname</TableCell>
            <TableCell>IP Address</TableCell>
            <TableCell>Port</TableCell>
            <TableCell>Protocol</TableCell>
            <TableCell>Service</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key="1">
            <TableCell component="th" scope="row">lablin01</TableCell>
            <TableCell>10.16.5.65</TableCell>
            <TableCell>22</TableCell>
            <TableCell>TCP</TableCell>
            <TableCell>SSH</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell component="th" scope="row">lablin01</TableCell>
            <TableCell>10.16.5.65</TableCell>
            <TableCell>80</TableCell>
            <TableCell>TCP</TableCell>
            <TableCell>HTTPS</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell component="th" scope="row">lablin01</TableCell>
            <TableCell>10.16.5.65</TableCell>
            <TableCell>443</TableCell>
            <TableCell>TCP</TableCell>
            <TableCell>HTTPS</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell component="th" scope="row">labwin03</TableCell>
            <TableCell>10.12.5.16</TableCell>
            <TableCell>3389</TableCell>
            <TableCell>TCP</TableCell>
            <TableCell>Microsoft RDS</TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell component="th" scope="row">labwin03</TableCell>
            <TableCell>10.12.5.16</TableCell>
            <TableCell>443</TableCell>
            <TableCell>TCP</TableCell>
            <TableCell>HTTPS</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}

export default ResultsGrid;
