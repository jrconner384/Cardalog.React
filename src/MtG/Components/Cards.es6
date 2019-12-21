import React from 'react';
import Card from './Card.es6';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.GetCards();
  }

  GetCards() {
    console.log('Getting cards.');
    fetch('http://localhost:7071/api/cards')
      .then((response) => {
        this.setState({ cards: response });
      });
  }

  render() {
    console.log('Cards:');
    console.log(this.state.cards);
    return (
      <div>{this.state.cards.toString()}</div>
    )
    // const cards = this.state.cards.map((cards, i) => (
    //   <Card Title={cards.Title}
    //     Black={1} Blue={0} Colorless={0} Converted={1} Green={0} Red={0} White={0}
    //     Type="Main Type" Subtype="Subtype" ExpansionName="Expansion"
    //     Text="Test (This card is a test card.)" FlavorText="This is some lore about the Test Card."
    //     CardNumber="1" ExpansionCount="100" Copyright="2019"
    //     Abbreviation="EXP" Rarity="Rare" Artist="Jason Conner"
    //     Power={5} Toughness={5} />
    // ));

    // return (
    //   <div class="container row">
    //     {cards}
    //   </div>
    // );
  }
}

export default Cards;
