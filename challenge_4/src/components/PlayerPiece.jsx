import React from 'react'

class PlayerPiece extends React.Component {
  constructor(props) {
    super(props)
  }

  onClick() {
    console.log(`{this.props.player} clicked column {this.props.piece}`)
  }
  render() {
   return(
      <td>
        {this.props.player}
      </td>
    )
  }

}

export default PlayerPiece;