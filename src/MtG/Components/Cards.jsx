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
      <Card card={card} key={card.Title.concat(i)} />
    ));

    return (
      <div id="cards-view" className="row">
        {cards}
      </div>
    );
  }
}

export default Cards;
