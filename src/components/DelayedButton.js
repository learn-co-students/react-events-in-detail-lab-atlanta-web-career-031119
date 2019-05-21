import React from 'react';

export default class DelayedButton extends React.Component {
  handleDelayedClick = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDelayedClick}>Delay.</button>;
      </div>
    )
  }
}
