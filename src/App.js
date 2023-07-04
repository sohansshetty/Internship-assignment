import './App.css';
import React, { useState } from 'react';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import data from './data'; 

const App = () => {
  const [selectedId, setSelectedId] = useState(3);

  const handleItemClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="container-center">
      <div className="row">
        <div className="col">
          <LeftComponent data={data} onItemClick={handleItemClick} />
        </div>
        <div className="col">
          <RightComponent id={selectedId} />
        </div>
      </div>
    </div>
  );
};

export default App;
