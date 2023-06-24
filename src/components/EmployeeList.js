import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <div className="row">
      {employees.map((employee) => (
        <div key={employee.id} >
          <div className="list">
              <h5 className="title">{employee.id}</h5>
              <img
                src={employee.avatar}
                alt={employee.first_name}
                className="img"
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px'}}
              />
          </div>
          <p className="text">{employee.first_name}</p>
        </div>
      ))}
    </div>
  );
 };

export default EmployeeList;



