import React, { useState } from 'react';

const LeftComponent = ({ data, onItemClick }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onItemClick(item.id);
  };

  return (
    <div>
      <ul className="list-group">
        {data.map((item) => (
          <li
            key={item.id}
            className={`list-group-item ${selectedItem === item ? 'active' : ''}`}
            onClick={() => handleItemClick(item)}
          >
            {item.Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftComponent;

