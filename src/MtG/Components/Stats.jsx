import React from 'react';

class Stats extends React.Component {
  // According to React, classes should always call the base constructor (https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)
  // but the linter doesn't like it. Disabling the warning for now.
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    if (typeof this.props.toughness !== 'undefined' && this.props.toughness > 0) {
      return (
        <div className="mtg-pt float-right">
          <i className="far fa-heart"> {this.props.power} </i>
          <i className="fas fa-shield-alt"> {this.props.toughness} </i>
        </div>
      )
    }
    return <div className="mtg-pt float-right"></div>;
  }
}

export default Stats;
