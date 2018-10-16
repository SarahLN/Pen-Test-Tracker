import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="SearchForm" noValidate autoComplete="off">
        <TextField
          id="outlined-full-width"
          label="Search Database"
          style={{ margin: 8 }}
          placeholder="Begin typing search here."
          helperText=""
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </form>
    )
  }
}

export default SearchBar;
