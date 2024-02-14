import "../CSS/mystyle.css";
import { useState } from "react";
import React from "react";
const Addtask = ({ tasks, setTasks }) => {
  const [taskValue, setTaskValue] = useState("");
  const handleChange = (event) => {
    setTaskValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //object task
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskValue,
      completed: false,
    };
    setTasks([...tasks, task]);
    console.log(task);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlfor="">Task Name:</label>
      <input type="text" name="task" id="task" onChange={handleChange} />

      <button className="button1" type="Submit">
        Add Task
      </button>
    </form>
  );
};
export default Addtask;
