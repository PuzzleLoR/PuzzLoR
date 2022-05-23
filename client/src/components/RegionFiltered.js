import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import cards from '../cards.js';
import { useState } from 'react';
//pull request example
var RegionFiltered = () => {

    const [cost, setCost] = useState(0);
    const [attack, setAttack] = useState(0);
    const [health, setHealth] = useState(0);



    const levelCheck = (type, supertype, rarity, name) => {
        if (type === 'Unit' && supertype === 'Champion' && rarity === 'None') {
            return 'Leveled ' + name;
        } else {
            return name;
        }
    }

    const region = "all";




    return (
        <ul className="cards">
            <button>
                <img src={`./regions/icon-${region}.png`} alt="All Regions" />
            </button>

            {cards().map((card) => {
                return (
                    <li key={card.cardCode}
                        className={`${card.type}container`}>
                        <div className={card.type}>
                            <img
                                className={card.type}
                                src={`./cards/${card.cardCode}-full.png`} />
                        </div>
                        {/* level check for champion level up */}
                        <p>
                            {levelCheck(card.type, card.supertype, card.rarity, card.name)}
                        </p>
                        <img
                            style = {{width:'5%'}}
                            src={`./regions/icon-${card.regionRef}.png`}
                            alt="All Regions" 
                            />

                    </li>
                )
            }
            )}
        </ul>
    )
};

export default RegionFiltered;