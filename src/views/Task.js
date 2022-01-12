import React, { useState, useEffect } from 'react';
import TaskForm from '../Components/TaskForm';
import UserTasks from '../Components/UserTasks';
import { createToDo, fetchTask } from '../services/todos';

export default function Task() {
  const [task, setTask] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);

  const taskSubmit = async (e) => {
    e.preventDefault();
    await createToDo(task);
  };

  useEffect(() => {
    const getTask = async () => {
      const data = await fetchTask();
      setTaskList(data);
      console.log(data);
      setLoading(false);
    };
    getTask();
  }, []);

  if (loading) {
    return <h1>loading </h1>;
  }

  return (
    <div>
      <UserTasks taskList={taskList} />
      <TaskForm task={task} setTask={setTask} taskSubmit={taskSubmit} taskList={taskList} />{' '}
    </div>
  );
}
