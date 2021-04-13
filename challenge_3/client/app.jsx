
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
    return (
      <HomePage />
    )
  }

  render() {
    const proceed = this.state.information;
    let button;
    if (!proceed) {
      button = <button onClick = {this.handleCheckoutClick.bind(this)} />
    } else {
      return(
        <Information proceed = {this.state.information} address = {this.state.address} ccinfo = {this.state.ccinfo} confirmation = {this.state.confirmation} handleInformationClick = {this.handleInformationClick} handleAddressClick = {this.handleAddressClick} handleCCInfoClick = {this.handleCCInfoClick} handleConfirmationClick ={this.handleConfirmationClick}/>
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
    if(!props.address) {
      button = <button onClick = {props.handleInformationClick.bind(this)} />
    } else {
      return (
        <Address proceed = {props.information} address = {props.address} ccinfo = {props.ccinfo} confirmation = {props.confirmation} handleInformationClick = {props.handleInformationClick} handleAddressClick = {props.handleAddressClick} handleCCInfoClick = {props.handleCCInfoClick} handleConfirmationClick = {props.handleConfirmationClick}/>
      )
    }
  return(
    <div>
      INFORMATION FORMS
      {button}
    </div>
  )
}

const Address = function(props) {
  let button;
  if(!props.ccinfo) {
    button = <button onClick = {props.handleAddressClick.bind(this)} />
  } else {
    return (
      <CCInfo proceed = {props.information} address = {props.address} ccinfo = {props.ccinfo} confirmation = {props.confirmation} handleInformationClick = {props.handleInformationClick} handleAddressClick = {props.handleAddressClick} handleCCInfoClick = {props.handleCCInfoClick} handleConfirmationClick ={props.handleConfirmationClick}/>
    )
  }
    return(
      <div>
        ADDRESS FORMS
        {button}
      </div>
)
}

const CCInfo = function(props) {
  let button;
  if(!props.confirmation) {
    button = <button onClick = {props.handleCCInfoClick.bind(this)} />
  } else {
    return (
      <Confirmation proceed = {props.information} address = {props.address} ccinfo = {props.ccinfo} confirmation = {props.confirmation} handleInformationClick = {props.handleInformationClick} handleAddressClick = {props.handleAddressClick} handleCCInfoClick = {props.handleCCInfoClick} handleConfirmationClick = {props.handleConfirmationClick}/>
    )
  }
return(
  <div>
    CC Info Forms
    {button}
  </div>
)
}

const Confirmation = function(props) {
  let button;
  button = <button onClick = {props.handleConfirmationClick.bind(this)} />
  return(
    <div>
      Confirmation Page
      {button}
    </div>
  )
}


ReactDOM.render(<HomePage />, document.getElementById("homepage"))
// ReactDOM.render(<Information />, document.getElementById("information"))
// ReactDOM.render(<Address />, document.getElementById("address"))
// ReactDOM.render(<CCInfo />, document.getElementById("ccinfo"))
// ReactDOM.render(<Confirmation />, document.getElementById("confirmation"))




