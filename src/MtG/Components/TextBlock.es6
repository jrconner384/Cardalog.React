import React from 'react';

class TextBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="card-text">
        <div class="mtg-text">{this.props.Text}</div>
        <div class="mtg-ftext font-italic">{this.props.FlavorText}</div>
      </div>
    )
  }
}

export default TextBlock;
