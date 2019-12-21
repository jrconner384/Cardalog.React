import React from 'react';

class Cost extends React.Component {
  constructor(props) {
    super(props);
    this.cost = this.props.cost;
  }

  render() {
    if (typeof this.cost.Converted === 'undefined' || isNaN(this.cost.Converted) || this.cost.Converted == 0) {
      return <div class="mtg-cost float-right"></div>
    }
    else {
      return <div class="mtg-cost float-right">{this.cost.Black} {this.cost.Blue} {this.cost.Colorless} {this.cost.Green} {this.cost.Red} {this.cost.White}</div>
    }
  }
}

export default Cost;
