import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCarModel } from './carModelsSlice';

import './AddCarModelForm.module.scss'; 

function AddCarModelForm() {
  const [name, setName] = useState('');
  const [maintenance, setMaintenance] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCarModel({ id: Date.now(), name, maintenance: maintenance.split(',') }));
    setName('');
    setMaintenance('');
  };

  return (
    <form className="add-car-model-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Car Model Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Maintenance (comma separated)"
        value={maintenance}
        onChange={e => setMaintenance(e.target.value)}
      />
      <button type="submit">Add Car Model</button>
    </form>
  );
}

export default AddCarModelForm;
