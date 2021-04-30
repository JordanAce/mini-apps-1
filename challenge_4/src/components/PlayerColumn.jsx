import React from 'react'

class PlayerColumn extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
       <td style = {{"backgroundColor": this.props.state.color}}>
         {this.props.id}
       </td>
    )
    }
  }

export default PlayerColumn;