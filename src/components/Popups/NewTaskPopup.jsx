// import React from "react";
//import "./Modal.css";

import { useState } from 'react';

const TaskForm = () => {
  const [notes, setNotes] = useState('');
  const [tasktypeId, setTasktypeId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (

    <div
      className="bg-white shadow-lg rounded-md p-4">
      <form onSubmit={handleSubmit}>
        <label>
          Notes:
          <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
        </label>
        <br />
        {/* <label>
          Task Type ID:
          <input type="number" value={tasktypeId} onChange={(e) => setTasktypeId(e.target.value)} />
        </label> */}
        {/* <br /> */}
        <label>
          Start Time:
          <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </label>
        <br />
        <label>
          End Time:
          <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </label>
        <br />
        <label>
          Completed:
          <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
};

export default TaskForm;

