import React, {useState} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import cards from '../cards.js';
import PreviewCard from './PreviewCard.jsx';
//pull request example
var CardList = () => {

  const [preview, setPreview] = useState('');
  const levelCheck = (type, supertype, rarity, name) => {
    if (type === 'Unit' && supertype === 'Champion' && rarity === 'None') {
      return 'Leveled ' + name;
    } else {
      return name;
    }
  }

  return (
    <div className='list-preview-container'>
      <div>Hover over a list item to preview the card!</div>
      <ul className="cards">
        {cards().map((card) => {
          return (
            <li key={card.cardCode} onMouseOver={()=> {setPreview(card.cardCode)}}>
              <div className={card.type}>
                <img
                  className={card.type}
                  src={`./cards/${card.cardCode}-full.png`} />
              </div>
              <p>
                {levelCheck(card.type, card.supertype, card.rarity, card.name)}
              </p>
            </li>
          )
        }
        )}
      </ul>
      <PreviewCard preview={preview}/>
    </div>
  )
};

export default CardList;