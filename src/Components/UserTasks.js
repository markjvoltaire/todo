import React from 'react';

export default function UserTasks({ taskList, boxCheck, handleClick }) {
  console.log(taskList);
  console.log(boxCheck);

  return (
    <div>
      <h3>here are your task to do </h3>
      {taskList.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.is_complete}
            onChange={() => {
              handleClick(task);
            }}
          />

          {task.task}
        </li>
      ))}
    </div>
  );
}
