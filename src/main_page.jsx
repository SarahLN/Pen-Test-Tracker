import React from 'react'

import AppToolbar from './components/toolbar'
import Settings from './components/settings'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      name: "Sarah",
      currPage: null,
    }
  }

  handlePageChange(newPage) {
    console.log("new page selected " + newPage);
    this.setState({currPage: newPage});
  }

  render() {
    const currPage = this.state.currPage;
    let display_page;
    if (currPage === "Settings") {
      // Load the settings page
      display_page = <Settings />;
    } else {
      // Load the default page
      display_page = <p>This is the main page</p>;
    }
    return(
      <div>
        <AppToolbar
          state={this.state}
          onMenuSelect={this.handlePageChange} />
        {display_page}
      </div>
    )
  }
}

export default App
