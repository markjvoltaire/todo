import React from 'react';

export default function TaskForm({ task, setTask, taskSubmit }) {
  return (
    <div>
      <p>Enter A Task You Need To Do </p>
      <div>
        <form>
          <input
            placeholder="enter task"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></input>

          <button onClick={taskSubmit}>submit task</button>
        </form>
      </div>
    </div>
  );
}
