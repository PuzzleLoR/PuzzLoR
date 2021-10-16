import React from 'react';
import CardList from './CardList.jsx';
import Board from './Board.jsx'
const App = () => {
  return (
    <div className='main-container'>
      <Board/>
      <CardList/>
    </div>
  )
}

export default App;
