import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import cards from '../cards.js';
import PreviewCard from './PreviewCard.jsx';
import RegionFilterIcon from './RegionFilterIcon.jsx';
//pull request example
var CardList = () => {
  const [preview, setPreview] = useState('');
  const [regions, setRegions] = useState([]);
  const allRegions = ["all", "BandleCity", "Bilgewater", "Demacia", "Freljord", "Ionia", "Noxus", "PiltoverZaun", "ShadowIsles", "Shurima", "Targon"];

  const levelCheck = (type, supertype, rarity, name) => {
    if (type === 'Unit' && supertype === 'Champion' && rarity === 'None') {
      return 'Leveled ' + name;
    } else {
      return name;
    }
  }

  // region: [frejlord, noxus]
  //TODO add remove region capabalities
  const filterCheck = () => {
    if (regions.length > 0) {
      var result = [];
      // console.log(regions)
      for (var i = 0; i < regions.length; i++) {
        result.push(cards().filter((filterByRegion) => filterByRegion.regionRef === regions[i]));
      }
      // console.log(result);
      // console.log("Result");
      return result.flat();
    } else {
      return cards();
    }
  }

  const handleRegions = (region) => {


    //  checks whether clicked region icon has already been clicked, only adds cards to state if clicked region is NOT present in state.
    //TODO: add remove region capabalities
    
    if (Object.values(regions).includes(region)){
      console.log("found it");
    } else {
      console.log("not found, adding to regions");
      setRegions(prevRegions => [...prevRegions, region]);
    }
    
  }

  //use .filter to filter regions

  return (
    <div className='list-preview-container'>
      <ul className="cards">
        {filterCheck().map((card) => {
          {/* console.log(card + "cards in .map") */}
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
      <div className = "region-button-container">
      
      {allRegions.map((reg) => { return (<RegionFilterIcon regions={reg} handleRegions = {handleRegions}/> )})}
        
        
      </div>
    </div>
  )
};

export default CardList;