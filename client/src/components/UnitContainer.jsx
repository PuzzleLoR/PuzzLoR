import React, { useState } from 'react'

// const [card,setCard] = useState(
//     {
//     "associatedCards": [],
//     "associatedCardRefs": [
//       "01IO015T1",
//       "01IO015T2"
//     ],
//     "assets": [
//       {
//         "gameAbsolutePath": "http://dd.b.pvp.net/2_17_0/set1/en_us/img/cards/01IO015.png",
//         "fullAbsolutePath": "http://dd.b.pvp.net/2_17_0/set1/en_us/img/cards/01IO015-full.png"
//       }
//     ],
//     "region": "Ionia",
//     "regionRef": "Ionia",
//     "regions": [
//       "Ionia"
//     ],
//     "regionRefs": [
//       "Ionia"
//     ],
//     "attack": 4,
//     "cost": 4,
//     "health": 4,
//     "description": "When you <link=keyword.Stun><sprite name=Stunned><style=Keyword>Stun</style></link> or <link=keyword.Recall><style=Keyword>Recall</style></link> an enemy, I deal 2 to it.",
//     "descriptionRaw": "When you Stun or Recall an enemy, I deal 2 to it.",
//     "levelupDescription": "You <link=keyword.Stun><sprite name=Stunned><style=Keyword>Stun</style></link> or <link=keyword.Recall><style=Keyword>Recall</style></link> 5+ units<style=Variable></style>.",
//     "levelupDescriptionRaw": "You Stun or Recall 5+ units.",
//     "flavorText": "\"Death is like the wind...\"",
//     "artistName": "SIXMOREVODKA",
//     "name": "Yasuo",
//     "cardCode": "01IO015",
//     "keywords": [
//       "Quick Attack"
//     ],
//     "keywordRefs": [
//       "QuickStrike"
//     ],
//     "spellSpeed": "",
//     "spellSpeedRef": "",
//     "rarity": "Champion",
//     "rarityRef": "Champion",
//     "subtype": "",
//     "subtypes": [],
//     "supertype": "Champion",
//     "type": "Unit",
//     "collectible": true,
//     "set": "Set1"
//   })
  
const UnitContainer = () => {
    return (
        <div> {/* containers for mutable values (health/cost/hp) */}

        {/* <p className = "health">
        {`===Health: ${card.health}===`}
        </p>
        <button 
        classname = "increment"
        onClick={()=> setHealth(card.health+1)}>^</button> */}
        {/* <button 
        classname = "decrement"
        onClick={setHealth(card.health-1)}>v</button> */}
{/* 
        <p className = "cost">
        {`===Cost: ${card.cost}===`}
        </p>
        <button 
        classname = "increment"
        onClick={setCost(cost+1)}>^</button>
        <button 
        classname = "decrement"
        onClick = {setCost(cost-1)}>v</button>
        
        <p className = "attack">
        {`===Attack: ${card.attack}===`}
        </p>
        <button 
        classname = "increment"
        onClick = {setAttack(attack+1)}>^</button>
        <button classname = "decrement"
        onclick = {setAttack(attack-1)}>v</button> */}</div>
    )
        
    
}

export default UnitContainer
