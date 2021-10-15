import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import cards from '../cards.js';
//pull request example
var CardList = () => {

  const levelCheck = (type, supertype, rarity, name) => {
    if (type === 'Unit' && supertype === 'Champion' && rarity === 'None') {
      return 'Leveled ' + name;
    } else {
      return name;
    }
  }

  return (
  <ul className="cards">
    {cards().map((card) => {
      return (
      <li key={card.cardCode}>
        <div className = {card.type}>
          <img
          className = {card.type}
          src = {`./cards/${card.cardCode}-full.png`} />
        </div>
        <p>
          {levelCheck(card.type, card.supertype, card.rarity, card.name)}
        </p>
      </li>
      )}
    )}
  </ul>
  )
};

export default CardList;