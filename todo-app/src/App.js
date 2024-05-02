import React, { useState } from 'react';
import './App.css';


function App() {

  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTask = () => {
    if (inputText.trim() !== '') {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        text: inputText,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setInputText('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
