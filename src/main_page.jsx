import React from 'react'

import AppToolbar from './components/toolbar'

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
    return(
      <div>
        <AppToolbar
          state={this.state}
          onMenuSelect={this.handlePageChange} />
      </div>
    )
  }
}

export default App
