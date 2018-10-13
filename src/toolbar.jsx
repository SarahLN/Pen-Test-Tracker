import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default class AppToolbar extends React.Component {
  render() {
    return (<div>
        <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Pen Test Tracker
              </Typography>
            </Toolbar>
        </AppBar>
    </div>);
  }
}
