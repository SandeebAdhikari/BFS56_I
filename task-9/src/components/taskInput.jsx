import React from "react";

function TaskInput({ onAddTask }) {
  let taskInput = "";

  const handleInputChange = (e) => {
    taskInput = e.target.value;
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      onAddTask(taskInput);
      taskInput = ""; // Clear the input
    }
  };

  return (
    <div className="flex gap-5">
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Enter a new task"
        className="border border-gray-300 rounded-md p-2"
      />
      <button
        onClick={handleAddTask}
        className="btn btn-ghost border border-neutral-600 rounded-lg p-2 "
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
