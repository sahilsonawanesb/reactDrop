import React from 'react';
import Drop from './components/Drops';
import './index.css';

function App() {
  const items = ['Yes', 'No', 'Probably use'];

  return (
    <div className="App">
      <h1>Should you use a dropdown?</h1>
      <Drop items={items} />
    </div>
  );
}

export default App;
