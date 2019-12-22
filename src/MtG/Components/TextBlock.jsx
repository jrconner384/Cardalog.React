import React from 'react';

class TextBlock extends React.Component {
  // According to React, classes should always call the base constructor (https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)
  // but the linter doesn't like it. Disabling the warning for now.
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-text">
        <div className="mtg-text">{this.props.text}</div>
        <div className="mtg-ftext font-italic">{this.props.flavorText}</div>
      </div>
    )
  }
}

export default TextBlock;
