import React, { useState } from 'react';
import Parent from './Parent';
import './App.css';


function App() {
  let [number, setNumber] = useState(45);
  return (
    <div>
      Hello World
      <Parent numb={number}></Parent>
      <button onClick={() => {
                              setNumber(++number)
                             }}>Increase Number</button>
    </div>
  );
}

export default App;
