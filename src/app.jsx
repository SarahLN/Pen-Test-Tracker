import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class App extends React.Component {
  render() {
    return (<div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                React & Material-UI Sample Application
                </Typography>
            </Toolbar>
        </AppBar>
      <h2>Welcome to React!</h2>
    </div>);
  }
}
