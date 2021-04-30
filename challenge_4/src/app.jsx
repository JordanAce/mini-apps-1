import React from 'react'
import ReactDOM from 'react-dom'
import ConnectFourBoard from './/components/ConnectFourBoard.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <ConnectFourBoard />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
