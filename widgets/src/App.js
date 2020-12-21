import React, { useState } from 'react';
import Accordion from './components/Accordion/Accordion'
import Search from './components/Search';
import Dropdown from './components/Dropdown/Dropdown';
import items from './components/Accordion/items';
import options from './components/Dropdown/options';

function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="App">
      {/* <Accordion items={items}/> */}
      <Search />
      {/* <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> */}
    </div>
  );
}

export default App;
