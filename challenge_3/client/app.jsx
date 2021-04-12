
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form : ''
    }
  }

  render() {
    return(
      <div>
        <h2>
TESTING AGAIN        </h2>
      </div>
      )
  }
}
const TestList = function() {
  return(
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

const ThisRepo = function() {
  return(
  <div>THIS REPO IS STUPID</div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
ReactDOM.render(<TestList />, document.getElementById("testlist"))
ReactDOM.render(<ThisRepo />, document.getElementById("isstupid"))


