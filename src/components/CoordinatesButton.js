import React from 'react'

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    let mouseCoordinates = []
    let x = event.clientX
    let y = event.clientY
    mouseCoordinates.push(x, y)
    this.props.onReceiveCoordinates(mouseCoordinates)
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>Coordinates</button>
      </div>
    )
  }
}
