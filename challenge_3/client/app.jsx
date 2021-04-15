

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      information : false,
      address: false,
      ccinfo: false,
      confirmation: false,
      value : '',
      id: '',
      name: '',
      email: '',
      password: '',
      ln1: '',
      ln2: '',
      city: '',
      state: '',
      zip: '',
      phonenum: '',
      ccnum: '',
      expiration: '',
      CVV: '',
      billingzip: ''
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
    this.setState({
      [event.target.name] : event.target.value
     })
  }

  handleCheckoutClick(event) {
    this.setState ({
      information: true
    })
    let state = this.state;
    $.ajax({
      type: 'POST',
      url: ('/ccinfo'),
      data: state,
      success: function (data) {
        console.log('SUCCESS POST CLICK')
      },
      error: function (error) {
        console.log('ERROR POST CLICK')
      }
    })
    event.preventDefault();
  }


  handleInformationClick() {
    this.setState({
      address: true
    })
    let state = this.state;
    $.ajax({
      type: 'POST',
      url: ('/ccinfo'),
      data: state,
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
      confirmation: false,
      value : '',
      id: '',
      name: '',
      email: '',
      password: '',
      ln1: '',
      ln2: '',
      city: '',
      state: '',
      zip: '',
      phonenum: '',
      ccnum: '',
      expiration: '',
      CVV: '',
      billingzip: ''
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
        <Information state = {this.state} handleInformationClick = {this.handleInformationClick} handleAddressClick = {this.handleAddressClick} handleCCInfoClick = {this.handleCCInfoClick} handleConfirmationClick ={this.handleConfirmationClick} handleChange = {this.handleChange}/>
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
    if(!props.state.address) {
      return(
        <div>
          <h1>
          Enter Your Information:
          </h1><br></br>
          <form onSubmit = {props.handleInformationClick}>
          Full Name: &nbsp; <input type = "text" name = "name" value = {props.state.name} onChange = {props.handleChange}></input><br></br>
          E-Mail: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type = "text" name = "email" value = {props.state.email} onChange = {props.handleChange}></input><br></br>
          Password: &nbsp;&nbsp;  <input type = "text" name = "password" value = {props.state.password} onChange = {props.handleChange}></input><br></br>
          <input type ="submit" value ="Next"></input>
          </form>
        </div>
      )
    } else {
      return (
        <Address state = {props.state} handleInformationClick = {props.handleInformationClick} handleAddressClick = {props.handleAddressClick} handleCCInfoClick = {props.handleCCInfoClick} handleConfirmationClick = {props.handleConfirmationClick} handleChange = {props.handleChange}/>
      )
    }
}
//Enter Address then render CC info on Next click
const Address = function(props) {

  if(!props.state.ccinfo) {
    return(
      <div>
      <h1>
      Enter Your Address:
      </h1><br></br>
      <form onSubmit = {props.handleAddressClick}>
      Line 1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type = "text" name = "ln1" value = {props.state.ln1} onChange = {props.handleChange}></input><br></br>

      Line 2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type = "text" name = "ln2" value = {props.state.ln2} onChange = {props.handleChange}></input><br></br>

      City: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type = "text" name = "city" value = {props.state.city} onChange = {props.handleChange}></input><br></br>

      State: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type = "text" name = "state" value = {props.state.state} onChange = {props.handleChange}></input><br></br>

      Zip Code: &nbsp;&nbsp; <input type = "text" name = "zip" value = {props.state.zip} onChange = {props.handleChange}></input><br></br>

      Phone #: &nbsp;&nbsp;&nbsp;&nbsp; <input type = "text" name = "phonenum" value = {props.state.phonenum} onChange = {props.handleChange}></input><br></br>

      <input type ="submit" value ="Next"></input>
      </form>
    </div>
)
  } else {
    return (
      <CCInfo state = {props.state} handleInformationClick = {props.handleInformationClick} handleAddressClick = {props.handleAddressClick} handleCCInfoClick = {props.handleCCInfoClick} handleConfirmationClick ={props.handleConfirmationClick} handleChange = {props.handleChange}/>
    )
  }
}
//Enter CC information then render Confirmation page on Next
const CCInfo = function(props) {

  if(!props.state.confirmation) {
    return(
      <div>
          <h1>
          Enter Your Credit Card Information:
          </h1><br></br>
          <form onSubmit = {props.handleCCInfoClick}>
          Card Number: &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; <input type = "text" name = "ccnum" value = {props.state.ccnum} onChange = {props.handleChange}></input><br></br>
          Expiration MM/DD/YYYY: <input type = "text" name = "expiration" value = {props.state.expiration} onChange = {props.handleChange}></input><br></br>
          CVV: &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; <input type = "text" name = "CVV" value = {props.state.CVV} onChange = {props.handleChange}></input><br></br>
          Billing ZIP: &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <input type = "text" name = "billingzip" value = {props.state.billingzip} onChange = {props.handleChange}></input><br></br>
          <input type ="submit" value ="Next"></input>
          </form>
        </div>
    )
  } else {
    return (
      <Confirmation state = {props.state} handleInformationClick = {props.handleInformationClick} handleAddressClick = {props.handleAddressClick} handleCCInfoClick = {props.handleCCInfoClick} handleConfirmationClick = {props.handleConfirmationClick} handleChange = {props.handleChange}/>
    )
  }
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




