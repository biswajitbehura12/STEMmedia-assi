import React from 'react';
import { useDispatch } from 'react-redux';

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch({ type: 'UPDATE_VALUE', payload: value });
  };

  return (
    <div>
     input: <input type="text" onChange={handleChange} />
    </div>
  );
};

export default ComponentB;
