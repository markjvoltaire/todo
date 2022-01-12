import React from 'react';

export default function TaskForm() {
  return (
    <div>
      <p>Enter A Task You Need To Do </p>
      <div>
        <form>
          <input placeholder="enter task" type="checkbox"></input>
          <input type="text"></input>
          <button>submit task</button>
        </form>
      </div>
    </div>
  );
}
