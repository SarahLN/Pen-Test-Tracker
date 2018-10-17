import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import SearchBar from './searchbar'
import FilterItem from './filteritem'
import ResultsGrid from './resultsgrid'

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item sm={12}>
            <Paper elevation={1}>
              <SearchBar />
            </Paper>
          </Grid>
          <Grid item sm={2}>
            <Paper elevation={1}>
              <FilterItem name="Port" />
            </Paper>
          </Grid>
          <Grid item sm={10}>
            <Paper elevation={1}>
              <ResultsGrid />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default SearchPage;
