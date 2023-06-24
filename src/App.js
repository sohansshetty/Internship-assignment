import './App.css';
import React, { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => response.json())
      .then((data) => setEmployees(data.data));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by first name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <EmployeeList employees={filteredEmployees} />
    </div>
  );
};

export default App;
