import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import cards from '../cards.js';
import PreviewCard from './PreviewCard.jsx';
//pull request example
var CardList = () => {
  const [preview, setPreview] = useState('');
  const [region, setRegion] = useState([]);
  const allRegions = ["all", "bandlecity", "bilgewater", "demacia", "freljord", "ionia", "noxus", "piltoverzaun", "shadowisles", "shurima", "targon"];

  const levelCheck = (type, supertype, rarity, name) => {
    if (type === 'Unit' && supertype === 'Champion' && rarity === 'None') {
      return 'Leveled ' + name;
    } else {
      return name;
    }
  }

  // region: [frejlord, noxus]
  const filterCheck = () => {
    if (region.length > 0) {
      var result = [];
      for (var i = 0; i < region.length; i++) {
        result.push(cards().filter((filterByRegion) => filterByRegion.regionRef === region[i]));
      }
      return result;
    } else {
      return cards();
    }
  }

  //use .filter to filter regions

  return (
    <div className='list-preview-container'>
      <ul className="cards">
        {filterCheck().map((card) => {
          return (
            <li key={card.cardCode}
              onMouseOver={() => { setPreview(card.cardCode) }}>
              <div className={card.type}>
                <img
                  className={card.type}
                  src={`./cards/${card.cardCode}-full.png`}
                  alt={card.name} />
              </div>
              {/* level check for champion level up */}
              <p>
                {levelCheck(card.type, card.supertype, card.rarity, card.name)}
              </p>
              <img
                style={{ width: '5%' }}
                src={`./regions/icon-${card.regionRef}.png`}
                alt="All Regions" />
            </li>
          )
        }
        )}
      </ul>
      <PreviewCard preview={preview} />
    </div>
  )
};

export default CardList;