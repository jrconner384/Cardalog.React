import React from 'react';
import Card from './Card.jsx';
import axios from 'axios';

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
    axios.get('http://localhost:7071/api/cards')
      .then(response => {
        this.setState({ cards: response.data });
        console.log(this.state.cards);
      });
  }

  render() {
    const cards = this.state.cards.map((card, i) => (
      <Card key={card.Title + i.toString()}
        title={card.Title}
        black={card.Cost.Black} blue={card.Cost.Blue} colorless={card.Cost.Colorless} converted={1} green={card.Cost.Green} red={card.Cost.Red} white={card.Cost.White}
        type={card.Type} subtype={card.Subtype} expansionName={card.Expansion.Name}
        text={card.Text} flavorText={card.FlavorText}
        cardNumber={card.Number} expansionCount={card.Expansion.Count} copyright={card.Expansion.Copyright}
        abbreviation={card.Expansion.Abbreviation} rarity={card.Rarity} artist={card.Artist}
        power={card.Power} toughness={card.Toughness} />
    ));

    return (
      <div className="container row">
        {cards}
      </div>
    );
  }
}

export default Cards;
