import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search by name"
      />
    </div>
  );
};

export default Filter;
