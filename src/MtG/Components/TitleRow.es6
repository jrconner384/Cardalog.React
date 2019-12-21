import React from 'react';
import Cost from './Cost.es6';

class TitleRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="card-body mtg-title-row">
        <div class="card-title float-left mtg-title align-bottom">{this.props.Title}</div>
        <Cost Black={this.props.Black} Blue={this.props.Blue} Colorless={this.props.Colorless} Converted={this.props.Converted} Green={this.props.Green} Red={this.props.Red} White={this.props.White} />
      </div>
    )
  }
}

export default TitleRow;
