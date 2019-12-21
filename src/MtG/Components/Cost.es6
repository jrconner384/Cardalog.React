import React from 'react';

class Cost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.Converted > 0) {
      return <div class="mtg-cost float-right">{this.props.Black} {this.props.Blue} {this.props.Colorless} {this.props.Green} {this.props.Red} {this.props.White}</div>
    }
    return;
  }
}

export default Cost;
