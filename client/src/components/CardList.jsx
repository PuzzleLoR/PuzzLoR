import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import cards from '../cards.js';
import { useState } from 'react';
//pull request example
var CardList = () => {

  const [cost,setCost] = useState(0);
  const [attack,setAttack] = useState(0);
  const [health,setHealth] = useState(0);
  


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
      <li key={card.cardCode}
      className = {`${card.type}container`}>
        <div className = {card.type}>
          <img
          className = {card.type}
          src = {`./cards/${card.cardCode}-full.png`} />
        </div>
      {/* level check for champion level up */}
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