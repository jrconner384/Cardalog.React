import React from 'react';

class TypeRow extends React.Component {
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

