import React from 'react';


export default class DelayedButton extends React.Component {

    handleClick(e) {
        e.persist()
        setTimeout(this.props.onDelayedClick, this.props.delay, e) 
            
        
    }


    render() {
        return(
            <button onClick={(e)=>this.handleClick(e)}>Delay</button>
        )
    }



}