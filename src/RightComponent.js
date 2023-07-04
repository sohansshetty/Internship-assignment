import React from 'react';
import data from './data';

const RightComponent = ({ id }) => {
  const selectedItem = data.find((item) => item.id === id);

  return (
    <div>
        <h1 className = "centered-text">Card</h1>
        <div className="card">
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <h3>{selectedItem.Name}</h3>
            <p>Price: ${selectedItem.Price}</p>
            <h4>Item Id: {selectedItem.id}</h4>
        </div>
        </div>
    </div>
  );
};

export default RightComponent;


