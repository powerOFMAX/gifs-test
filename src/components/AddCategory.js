import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((previusState) => [inputValue, ...previusState]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input type="text" value={inputValue} onChange={handleInput} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}