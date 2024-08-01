// App.js
import React, { useState } from "react";
import TaskInput from "../components/taskInput";
import TaskList from "../components/taskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-10 gap-10">
        <div>
          <h1 className="text-5xl">To-Do List</h1>
        </div>
        <div className="card w-full max-w-md bg-black/50 shadow-md rounded-3xl p-6">
          <div className="card-body flex flex-col gap-5">
            <TaskInput onAddTask={addTask} />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
