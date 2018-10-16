import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import SearchBar from './searchbar'

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
              <Typography component="p">
                <SearchBar />
              </Typography>
            </Paper>
          </Grid>
          <Grid item sm={2}>
            <Paper elevation={1}>
              <Typography component="p">
                This is where the advanced search pane will go.
              </Typography>
            </Paper>
          </Grid>
          <Grid item sm={10}>
            <Paper elevation={1}>
              <Typography component="p">
                This is where the results will go.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default SearchPage;
