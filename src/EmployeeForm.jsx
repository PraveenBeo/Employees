import React, { useState } from 'react';

const EmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee({ name, jobTitle, email });
    setName('');
    setJobTitle('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Job Title</label>
        <input
          type="text"
          className="form-control"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Employee
      </button>
    </form>
  );
};

export default EmployeeForm;
