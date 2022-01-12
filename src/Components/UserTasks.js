import React from 'react';

export default function UserTasks({ taskList }) {
  console.log(taskList);

  return (
    <div>
      <h3>here are your task to do </h3>
      {taskList.map((task) => (
        <li key={task.id}>
          <input type="checkbox" />
          {task.task}
        </li>
      ))}
    </div>
  );
}
