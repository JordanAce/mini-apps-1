import React from 'react'
import PlayerPiece from './PlayerPiece.jsx'

class ConnectFourBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTurn : 1,
      render: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState ({
      render: true
    })
    console.log(event.target.id[0])
  }

  render () {

    return (
    <table style = {{width:'75%'}} className="ConnectFourBoard" onClick={this.props.onClick}>
      <caption>CONNECT 4</caption>
      <tbody>
      <tr>
        <PlayerPiece id = "1:6" onClick = {this.handleClick} />
        <PlayerPiece id = "2:6" onClick = {this.handleClick} />
        <PlayerPiece id = "3:6" onClick = {this.handleClick} />
        <PlayerPiece id = "4:6" onClick = {this.handleClick} />
        <PlayerPiece id = "5:6" onClick = {this.handleClick} />
        <PlayerPiece id = "6:6" onClick = {this.handleClick} />
        <PlayerPiece id = "7:6" onClick = {this.handleClick} />
      </tr>
      <tr>
        <PlayerPiece id = "1:5" onClick = {this.handleClick} />
        <PlayerPiece id = "2:5" onClick = {this.handleClick} />
        <PlayerPiece id = "3:5" onClick = {this.handleClick} />
        <PlayerPiece id = "4:5" onClick = {this.handleClick} />
        <PlayerPiece id = "5:5" onClick = {this.handleClick} />
        <PlayerPiece id = "6:5" onClick = {this.handleClick} />
        <PlayerPiece id = "7:5" onClick = {this.handleClick} />
      </tr>
      <tr>
        <PlayerPiece id = "1:4" onClick = {this.handleClick} />
        <PlayerPiece id = "2:4" onClick = {this.handleClick} />
        <PlayerPiece id = "3:4" onClick = {this.handleClick} />
        <PlayerPiece id = "4:4" onClick = {this.handleClick} />
        <PlayerPiece id = "5:4" onClick = {this.handleClick} />
        <PlayerPiece id = "6:4" onClick = {this.handleClick} />
        <PlayerPiece id = "7:4" onClick = {this.handleClick} />
      </tr>
      <tr>
        <PlayerPiece id = "1:3" onClick = {this.handleClick} />
        <PlayerPiece id = "2:3" onClick = {this.handleClick} />
        <PlayerPiece id = "3:3" onClick = {this.handleClick} />
        <PlayerPiece id = "4:3" onClick = {this.handleClick} />
        <PlayerPiece id = "5:3" onClick = {this.handleClick} />
        <PlayerPiece id = "6:3" onClick = {this.handleClick} />
        <PlayerPiece id = "7:3" onClick = {this.handleClick} />
      </tr>
      <tr>
        <PlayerPiece id = "1:2" onClick = {this.handleClick} />
        <PlayerPiece id = "2:2" onClick = {this.handleClick} />
        <PlayerPiece id = "3:2" onClick = {this.handleClick} />
        <PlayerPiece id = "4:2" onClick = {this.handleClick} />
        <PlayerPiece id = "5:2" onClick = {this.handleClick} />
        <PlayerPiece id = "6:2" onClick = {this.handleClick} />
        <PlayerPiece id = "7:2" onClick = {this.handleClick} />
      </tr>
      <tr>
        <PlayerPiece id = "1:1" onClick = {this.handleClick} />
        <PlayerPiece id = "2:1" onClick = {this.handleClick} />
        <PlayerPiece id = "3:1" onClick = {this.handleClick} />
        <PlayerPiece id = "4:1" onClick = {this.handleClick} />
        <PlayerPiece id = "5:1" onClick = {this.handleClick} />
        <PlayerPiece id = "6:1" onClick = {this.handleClick} />
        <PlayerPiece id = "7:1" onClick = {this.handleClick} />
      </tr>
      </tbody>
    </table>
    )
  }
}

export default ConnectFourBoard;