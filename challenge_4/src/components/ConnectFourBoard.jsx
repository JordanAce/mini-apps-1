import React from 'react'

class ConnectFourBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTurn : 1
    }
  }

  render () {
    return (
    <table style = {{width:'75%'}}>
      <caption>CONNECT 4</caption><br></br>
      <tbody>
      <tr>
        <td id = "6:1"></td>
        <td id = "6:2"></td>
        <td id = "6:3"></td>
        <td id = "6:4"></td>
        <td id = "6:5"></td>
        <td id = "6:6"></td>
        <td id = "6:7"></td>
      </tr>
      <tr>
        <td id = "5:1"></td>
        <td id = "5:2"></td>
        <td id = "5:3"></td>
        <td id = "5:4"></td>
        <td id = "5:5"></td>
        <td id = "5:6"></td>
        <td id = "5:7"></td>
      </tr>
      <tr>
        <td id = "4:1"></td>
        <td id = "4:2"></td>
        <td id = "4:3"></td>
        <td id = "4:4"></td>
        <td id = "4:5"></td>
        <td id = "4:6"></td>
        <td id = "4:7"></td>
      </tr>
      <tr>
        <td id = "3:1"></td>
        <td id = "3:2"></td>
        <td id = "3:3"></td>
        <td id = "3:4"></td>
        <td id = "3:5"></td>
        <td id = "3:6"></td>
        <td id = "3:7"></td>
      </tr>
      <tr>
        <td id = "2:1"></td>
        <td id = "2:2"></td>
        <td id = "2:3"></td>
        <td id = "2:4"></td>
        <td id = "2:5"></td>
        <td id = "2:6"></td>
        <td id = "2:7"></td>
      </tr>
      <tr>
        <td id = "1:1"></td>
        <td id = "1:2"></td>
        <td id = "1:3"></td>
        <td id = "1:4"></td>
        <td id = "1:5"></td>
        <td id = "1:6"></td>
        <td id = "1:7"></td>
      </tr>
      </tbody>
    </table>
    )
  }
}

export default ConnectFourBoard;