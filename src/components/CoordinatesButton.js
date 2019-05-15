import React from 'react';


export default class CoordinatesButton extends React.Component {

    handleClick(e) {
        let mouseCoordinates = []
        mouseCoordinates.push(e.clientX)
        mouseCoordinates.push(e.clientY)
        
        this.props.onReceiveCoordinates(mouseCoordinates)
    }
    
    
    render() {

        return(

            <button onClick={(e) =>this.handleClick(e)}>Click Here</button>

        )

    }


}