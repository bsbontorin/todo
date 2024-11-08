// import { useState } from 'react';
import './App.css';

import { AppRoutes } from './Routes';

// import { Temp } from './Temp';

function App() {
  return <AppRoutes />;
}

// example 1
/*
function App() {
  const [texts, setTexts] = useState<Array<string>>(['temp text 1', 'temp text 2', 'temp text 3', 'temp text 4']);

  function addText() {
    setTexts([...texts, 'temp text']);
  }

  return (
    <div>
      {texts.map((text) => {
        return <Temp key={text} text={text} />;
      })}

      <button
        onClick={addText}
        style={{
          backgroundColor: '#0ea5e9',
          color: '#ffffff',
          border: 0,
          padding: '6px 12px',
        }}
      >
        add text
      </button>
    </div>
  );
}
*/

export default App;
