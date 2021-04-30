import React from 'react'
import PlayerColumn from './PlayerColumn.jsx'

class ConnectFourBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTurn : 1,
      color: "white",
      board: []
    }
    this.onClick = this.onClick.bind(this);
    this.init = this.init.bind(this);

  }

  init() {
    let newBoard = [];
    for (let i = 0; i < 7; i++) {
      let column = []
      for (let j = 0; j < 6; j++) {
        column.push('X')
      }
      newBoard.push(column);
    }
    console.log(newBoard)
    this.setState({
      board: newBoard
    })
  }


  onClick() {
    if (this.state.playerTurn === 1) {
      this.setState({
        playerTurn: 2,
        color: "yellow"
      })
    } else if (this.state.playerTurn === 2) {
      this.setState({
        playerTurn: 1,
        color: "red"
      })
    }
  }

  componentDidMount() {
    this.init();
  }

  render () {
    return (
    <table style = {{width:'75%'}} className="ConnectFourBoard">
      {this.state.board.map((piece) =>
        <PlayerColumn key = {piece.id}/>
      )}
      {/* <caption>CONNECT 4</caption>
      <tbody>
      <tr>
        <PlayerPiece id = "1:6"  state = {this.state} onClick={this.onClick}/>
        <PlayerPiece id = "2:6"  state = {this.state} onClick={this.onClick}/>
        <PlayerPiece id = "3:6"  state = {this.state} onClick={this.onClick}/>
        <PlayerPiece id = "4:6"  state = {this.state} onClick={this.onClick}/>
        <PlayerPiece id = "5:6"  state = {this.state} onClick={this.onClick}/>
        <PlayerPiece id = "6:6"  state = {this.state} onClick={this.onClick}/>
        <PlayerPiece id = "7:6"  state = {this.state} onClick={this.onClick}/>
      </tr>
      <tr>
        <PlayerPiece id = "1:5"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "2:5"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "3:5"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "4:5"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "5:5"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "6:5"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "7:5"  state = {this.state} onClick={this.onClick} />
      </tr>
      <tr>
        <PlayerPiece id = "1:4"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "2:4"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "3:4"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "4:4"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "5:4"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "6:4"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "7:4"  state = {this.state} onClick={this.onClick} />
      </tr>
      <tr>
        <PlayerPiece id = "1:3"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "2:3"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "3:3"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "4:3"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "5:3"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "6:3"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "7:3"  state = {this.state} onClick={this.onClick} />
      </tr>
      <tr>
        <PlayerPiece id = "1:2"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "2:2"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "3:2"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "4:2"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "5:2"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "6:2"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "7:2"  state = {this.state} onClick={this.onClick} />
      </tr>
      <tr>
        <PlayerPiece id = "1:1"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "2:1"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "3:1"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "4:1"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "5:1"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "6:1"  state = {this.state} onClick={this.onClick} />
        <PlayerPiece id = "7:1"  state = {this.state} onClick={this.onClick} />
      </tr>
      </tbody> */}
    </table>
    )
  }
}

export default ConnectFourBoard;