import React from 'react';
import DisplayCard from './DisplayCard.jsx';
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
      <DisplayCard card={card} key={card.Title.concat(i)} />
    ));

    return (
      <div className="container row">
        {cards}
      </div>
    );
  }
}

export default Cards;
