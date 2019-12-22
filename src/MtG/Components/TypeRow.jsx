import React from 'react';

class TypeRow extends React.Component {
  // According to React, classes should always call the base constructor (https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)
  // but the linter doesn't like it. Disabling the warning for now.
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    if (typeof this.props.subtype === 'undefined' || this.props.subtype == null || this.props.subtype === "") {
      return (
        <div className="card-subtitle mb-2 text-muted mtg-type-row border-top border-bottom">
          <div className="mtg-type float-left">{this.props.type}</div>
          <div className="mtg-expansion float-right">{this.props.expansionName}</div>
        </div>
      )
    }
    else {
      return (
        <div className="card-subtitle mb-2 text-muted mtg-type-row border-top border-bottom">
          <div className="mtg-type float-left">{this.props.type} - {this.props.subtype}</div>
          <div className="mtg-expansion float-right">{this.props.expansionName}</div>
        </div>
      )
    }
  }
}

export default TypeRow;

