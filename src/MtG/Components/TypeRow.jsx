import React from 'react';

class TypeRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (typeof this.props.subtype === 'undefined' || this.props.subtype == null || this.props.subtype == "") {
      return (
        <div class="card-subtitle mb-2 text-muted mtg-type-row border-top border-bottom">
          <div class="mtg-type float-left">{this.props.type}</div>
          <div class="mtg-expansion float-right">{this.props.expansionName}</div>
        </div>
      )
    }
    else {
      return (
        <div class="card-subtitle mb-2 text-muted mtg-type-row border-top border-bottom">
          <div class="mtg-type float-left">{this.props.type} - {this.props.subtype}</div>
          <div class="mtg-expansion float-right">{this.props.expansionName}</div>
        </div>
      )
    }
  }
}

export default TypeRow;

