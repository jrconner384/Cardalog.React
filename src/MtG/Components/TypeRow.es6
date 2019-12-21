import React from 'react';

class TypeRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (typeof this.props.Subtype === 'undefined' || this.props.Subtype == null) {
      return (
        <div class="card-subtitle mb-2 text-muted mtg-type-row border-top border-bottom">
          <div class="mtg-type float-left">{this.props.Type}</div>
          <div class="mtg-expansion float-right">{this.props.ExpansionName}</div>
        </div>
      )
    }
    else {
      return (
        <div class="card-subtitle mb-2 text-muted mtg-type-row border-top border-bottom">
          <div class="mtg-type float-left">{this.props.Type} - {this.props.Subtype}</div>
          <div class="mtg-expansion float-right">{this.props.ExpansionName}</div>
        </div>
      )
    }
  }
}

export default TypeRow;

