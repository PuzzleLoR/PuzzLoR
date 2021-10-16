import React from 'react';
import CardList from './CardList.jsx';
import RegionFiltered from './RegionFiltered.js';
import UnitContainer from './UnitContainer.jsx';

const App = () => {
  return (
    <div>
      <h1>App.js is connected and working!</h1>
      {/* <UnitContainer/> */}
      <CardList />
      {/* <RegionFiltered/> */}
    </div>
  )
}

export default App;
