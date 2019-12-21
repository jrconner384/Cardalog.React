import React from 'react';
import Cost from './Cost.jsx';

class TitleRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="card-body mtg-title-row">
        <div class="card-title float-left mtg-title align-bottom">{this.props.title}</div>
        <Cost black={this.props.black} blue={this.props.blue} colorless={this.props.colorless} converted={this.props.converted} green={this.props.green} red={this.props.red} white={this.props.white} />
      </div>
    )
  }
}

export default TitleRow;
