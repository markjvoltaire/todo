import { client, checkError } from './client.js';

export async function createToDo(task) {
  const resp = await client.from('todos').insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(resp);
}

export async function fetchTask() {
  const resp = await client.from('todos').select('*');
  console.log(checkError(resp));
  return checkError(resp);
}
