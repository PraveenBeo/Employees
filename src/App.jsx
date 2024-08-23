import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';
import Filter from './Filter';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    console.log('Loaded employees from localStorage:', savedEmployees);
    setEmployees(savedEmployees);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      console.log('Saving employees to localStorage:', employees);
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  }, [employees, isInitialized]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
    setShowForm(false); // Hide form after adding employee
  };

  const updateEmployee = (index, updatedEmployee) => {
    const newEmployees = employees.map((emp, i) => (i === index ? updatedEmployee : emp));
    setEmployees(newEmployees);
  };

  const deleteEmployee = (index) => {
    const newEmployees = employees.filter((_, i) => i !== index);
    setEmployees(newEmployees);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="my-4">Employee Directory</h1>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Filter setFilter={setFilter} />
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Close' : 'ADD'}
        </button>
      </div>
      {showForm && <EmployeeForm addEmployee={addEmployee} />}
      <EmployeeList
        employees={filteredEmployees}
        updateEmployee={updateEmployee}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
};

export default App;
