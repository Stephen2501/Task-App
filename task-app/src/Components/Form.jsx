import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addDailyTask } from '../actions/dailyTaskAction';

const Form = () => {
  const [name, setName] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uuidv4();
    dispatch(addDailyTask(name, id, timestamp));
    event.target.reset()
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" onChange={(event) => setName(event.target.value)} />
      <br />
      <label htmlFor="timestamp">Complete by:</label>
      <input type="time" id="timestamp" name="complete by" onChange={(event) => setTimestamp(event.target.value)} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;