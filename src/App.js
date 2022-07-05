import React, { useState } from 'react';
import Parent from './Parent';
import './App.css';
import valueContext from './Value-Context';


function App() {
  //let [number, setNumber] = useState(45);
  let value = useState(21);
  return (
    <valueContext.Provider value={value}>
    <div>
      Hello World
      <Parent></Parent> 
    </div>
    </valueContext.Provider>
  );
}

export default App;
