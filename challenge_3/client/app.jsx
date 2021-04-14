

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      information : false,
      address: false,
      ccinfo: false,
      confirmation: false,
      value : ''

    }
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    this.handleInformationClick = this.handleInformationClick.bind(this);
    this.handleAddressClick = this.handleAddressClick.bind(this);
    this.handleCCInfoClick = this.handleCCInfoClick.bind(this);
    this.handleConfirmationClick = this.handleConfirmationClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //Click handlers
  handleChange(event) {
    this.setState({value:event.target.value})
  }

  handleCheckoutClick() {
    this.setState ({
      information: true
    })
  }

  handleInformationClick(event) {
    this.setState({
      address: true
    })

    console.log(event)
    $.ajax({
      type: 'POST',
      url: ('/ccinfo'),
      data: event.target.value,
      success: function (data) {
        console.log('SUCCESS POST CLICK')
      },
      error: function (error) {
        console.log('ERROR POST CLICK')
      }
    })
    event.preventDefault();
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

  //Homepage renders Information on Checkout click
  render() {
    const proceed = this.state.information;
    let button;
    if (!proceed) {
      button = <button onClick = {this.handleCheckoutClick.bind(this)}>Checkout</button>
    } else {
      return(
        <Information proceed = {this.state.information} address = {this.state.address} ccinfo = {this.state.ccinfo} confirmation = {this.state.confirmation} handleInformationClick = {this.handleInformationClick} handleAddressClick = {this.handleAddressClick} handleCCInfoClick = {this.handleCCInfoClick} handleConfirmationClick ={this.handleConfirmationClick} handleChange = {this.handleChange}/>
      )
    }

    return (
      <div>
        <h1>
          Let's Buy Something!
        </h1><br></br>
        {button}
      </div>
    )
  }
}

//Enter information then render Address on Next click
const Information = function(props) {
    let button;

    if(!props.address) {
      return(
        <div>
          <h1>
          Enter Your Information:
          </h1><br></br>
          <form onSubmit = {props.handleInformationClick}>
          Full Name: &nbsp; <input type = "text" id = "name"></input><br></br>
          E-Mail: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type = "text" id = "email"></input><br></br>
          Password: &nbsp;&nbsp;  <input type = "text" id = "password"></input><br></br>
          <input type ="submit" value ="Next" onChange = {props.handleChange}></input>
          </form>
        </div>
      )
    } else {
      return (
        <Address proceed = {props.information} address = {props.address} ccinfo = {props.ccinfo} confirmation = {props.confirmation} handleInformationClick = {props.handleInformationClick} handleAddressClick = {props.handleAddressClick} handleCCInfoClick = {props.handleCCInfoClick} handleConfirmationClick = {props.handleConfirmationClick}/>
      )
    }
}
//Enter Address then render CC info on Next click
const Address = function(props) {
  let button;
  if(!props.ccinfo) {
    button = <button onClick = {props.handleAddressClick.bind(this)}>Next</button>
  } else {
    return (
      <CCInfo proceed = {props.information} address = {props.address} ccinfo = {props.ccinfo} confirmation = {props.confirmation} handleInformationClick = {props.handleInformationClick} handleAddressClick = {props.handleAddressClick} handleCCInfoClick = {props.handleCCInfoClick} handleConfirmationClick ={props.handleConfirmationClick}/>
    )
  }
    return(
      <div>
      <h1>
      Enter Your Address:
      </h1><br></br>
      Line 1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type = "text" id = "ln1"></input><br></br>
      Line 2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type = "text" id = "ln2"></input><br></br>
      City: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type = "text" id = "city"></input><br></br>
      State: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type = "text" id = "state"></input><br></br>
      Zip Code: &nbsp;&nbsp; <input type = "text" id = "zip"></input><br></br>
      Phone #: &nbsp;&nbsp;&nbsp;&nbsp; <input type = "text" id = "phonenum"></input><br></br>
      {button}
    </div>
)
}
//Enter CC information then render Confirmation page on Next
const CCInfo = function(props) {
  let button;
  if(!props.confirmation) {
    button = <button onClick = {props.handleCCInfoClick.bind(this)}>Next</button>
  } else {
    return (
      <Confirmation proceed = {props.information} address = {props.address} ccinfo = {props.ccinfo} confirmation = {props.confirmation} handleInformationClick = {props.handleInformationClick} handleAddressClick = {props.handleAddressClick} handleCCInfoClick = {props.handleCCInfoClick} handleConfirmationClick = {props.handleConfirmationClick}/>
    )
  }
return(
  <div>
      <h1>
      Enter Your Credit Card Information:
      </h1><br></br>
      Card Number: &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; <input type = "text" id = "ln1"></input><br></br>
      Expiration MM/DD/YYYY: <input type = "text" id = "ln2"></input><br></br>
      CVV: &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; <input type = "text" id = "city"></input><br></br>
      Billing ZIP: &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <input type = "text" id = "state"></input><br></br>
      {button}
    </div>
)
}
//Show confirmation page with summary of information entered, then render HomePage on Purchase click
const Confirmation = function(props) {
  let button;
  button = <button onClick = {props.handleConfirmationClick.bind(this)}>Purchase</button>
  return(
    <div>
      <h1>
      Confirm your Information:
      </h1><br></br>
      {button}
    </div>
  )
}


ReactDOM.render(<HomePage />, document.getElementById("homepage"))




