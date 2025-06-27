import React, { useState } from 'react'
import './CourseInput.css'

const CourseInput = ({onAddTask}) => {
  const [task, setTask] = useState('');

  const addTaskHandler = () => {
    if (task.trim().length === 0) return;
    onAddTask(task);
    setTask('');
  };

  return (
    <div className='course-input'>
      <input 
        type='text' 
        placeholder='Enter your Task' 
        value={task} 
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTaskHandler}>Add</button>
    </div>
  );
};
export default CourseInput