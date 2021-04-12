
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      information : false
    }
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
  }

  handleCheckoutClick() {
    this.setState ({
      information: true
    })
  }



  render() {
    const proceed = this.state.information;
    let button;
    if (!proceed) {
      button = <button onClick = {this.handleCheckoutClick.bind(this)} />
    }

    return (
      <div>
        <h2>
         <Information proceed = {proceed} />
         {button}
        </h2>
      </div>
    )
  }
}

const Information = function() {
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

ReactDOM.render(<HomePage />, document.getElementById("homepage"))
ReactDOM.render(<Information />, document.getElementById("information"))
ReactDOM.render(<ThisRepo />, document.getElementById("isstupid"))


