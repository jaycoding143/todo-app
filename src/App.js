import React, { useState } from 'react';
import CourseInput from './Component/Todo-input';
import CourseList from './Component/Task-List';

import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const deleteTaskHandler = (taskIndex) => {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskIndex));
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <CourseInput onAddTask={addTaskHandler} />
      <CourseList tasks={tasks} onDeleteTask={deleteTaskHandler} />
    </div>
  );
};

export default App;