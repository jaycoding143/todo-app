import React from 'react';
import  './Task-list.css'

const CourseList = ({tasks, onDeleteTask}) => {
  return (
    <ul className='task-list'>
      {tasks.map((task, index) => (
        <li key={index}>
          {task} 
          <button onClick={() => onDeleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;