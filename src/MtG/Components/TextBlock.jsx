import React from 'react';

class TextBlock extends React.Component {
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
