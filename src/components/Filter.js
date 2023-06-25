import React from 'react';

const Filter = ({ onCategoryChange }) => {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <select onChange={handleCategoryChange}>
      <option value="all">All</option>
      <option value="groceries">Groceries</option>
      <option value="clothing">Clothing</option>
      <option value="electronics">Electronics</option>
    </select>
  );
};

export default Filter;
