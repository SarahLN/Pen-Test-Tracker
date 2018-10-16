import React from 'react'

import AppToolbar from './components/toolbar'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Sarah"
    }
  }

  render() {
    return(
      <div>
        <AppToolbar state={this.state}/>
      </div>
    )
  }
}

export default App
