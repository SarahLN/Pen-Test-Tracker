import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Settings from './settings'


export default class AppToolbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.state.name,
      anchorEl: null,
    }
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget.id });
    if (event.currentTarget.id != "Menu") {
      this.props.onMenuSelect(event.currentTarget.id);
    }
  }

  handleClose(event) {
    this.setState({ anchorEl: null });
    this.props.onMenuSelect(event.currentTarget.id);
  }

  render() {
    const { anchorEl } = this.state;

    return (<div>
        <AppBar position="static">
            <Toolbar>
              <IconButton
                aria-owns={anchorEl ? 'toolbar-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick.bind(this)}
                color="inherit"
                id="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="toolbar-menu"
                open={Boolean(anchorEl)}
                onClose={this.handleClose.bind(this)}
              >
                <MenuItem
                  id="Settings"
                  onClick={this.handleClose.bind(this)}
                >
                  Settings
                </MenuItem>
              </Menu>
              <Typography variant="title" color="inherit">
                Pen Test Tracker
              </Typography>
            </Toolbar>
        </AppBar>
    </div>);
  }
}
