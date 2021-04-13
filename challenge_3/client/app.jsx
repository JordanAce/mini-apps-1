
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      information : false,
      address: false,
      ccinfo: false,
      confirmation: false
    }
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    this.handleInformationClick = this.handleInformationClick.bind(this);
    this.handleAddressClick = this.handleAddressClick.bind(this);
    this.handleCCInfoClick = this.handleCCInfoClick.bind(this);
    this.handleConfirmationClick = this.handleConfirmationClick.bind(this);
  }

  //Click handlers
  handleCheckoutClick() {
    this.setState ({
      information: true
    })
  }

  handleInformationClick() {
    this.setState({
      address: true
    })
  }

  handleAddressClick() {
    this.setState({
      ccinfo: true
    })
  }

  handleCCInfoClick() {
    this.setState({
      confirmation: true
    })
  }

  handleConfirmationClick() {
    this.setState({
      information : false,
      address: false,
      ccinfo: false,
      confirmation: false
    })
  }

  render() {
    const proceed = this.state.information;
    let button;
    if (!proceed) {
      button = <button onClick = {this.handleCheckoutClick.bind(this)} />
    } else {
      return(
        <Information proceed = {this.state.information} address = {this.state.address} ccinfo = {this.state.ccinfo} confirmation = {this.state.confirmation} handleInformationClick = {this.handleInformationClick} handleAddressClick = {this.handleAddressClick}/>
      )
    }

    return (
      <div>
        <h2>
         {button}
        </h2>
      </div>
    )
  }
}


const Information = function(props) {
    let button;
    if (props.proceed) {
      button = <button onClick = {props.handleInformationClick.bind(this)} />
    }
  return(
    <div>
      INFORMATION FORMS
      {button}
    </div>
  )
}

const Address = function() {
  return(
  <div>ADDRESS FORMS</div>
  )
}

const CCInfo = function() {
  return(
  <div>CCInfo FORMS</div>
  )
}

const Confirmation = function() {
  return(
  <div>Confirmation PAGE</div>
  )
}


ReactDOM.render(<HomePage />, document.getElementById("homepage"))
// ReactDOM.render(<Information />, document.getElementById("information"))
// ReactDOM.render(<Address />, document.getElementById("address"))
// ReactDOM.render(<CCInfo />, document.getElementById("ccinfo"))
// ReactDOM.render(<Confirmation />, document.getElementById("confirmation"))




