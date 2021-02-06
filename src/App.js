import './App.css';
import React, { useState } from 'react';
import Box from './Box.js';

const randomColor = require('randomcolor');

// A random color generated inside a box inside a button.

function App() {
  const [myColor, setRandomColor] = useState(randomColor);

  return (
    <div className="App">
      <Box background={myColor} text="The" />
      <Box background={myColor} text="Rain" />
      <Box background={myColor} text="Bow" />
      <button
        onClick={() => {
          setRandomColor(randomColor);
        }}
      >
        Rainbow Maker
      </button>

      <p>
        <button>Color of the Rainbow</button> {myColor}
        <button>
          {/* <AwesomeButton type="primary">Rainbow</AwesomeButton> */}
        </button>
      </p>
    </div>
  );
}

export default App;
