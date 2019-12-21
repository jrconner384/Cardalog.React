import React from 'react';

class Cost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.converted > 0) {
      return <div class="mtg-cost float-right">{this.props.black} {this.props.blue} {this.props.colorless} {this.props.green} {this.props.red} {this.props.white}</div>
    }
    return;
  }
}

export default Cost;
