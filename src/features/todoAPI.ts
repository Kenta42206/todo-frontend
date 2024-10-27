import axios from "axios";

const baseUrl = "http://localhost:8080/todo";

export const getTodoList = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

export const addNewTodo = async (title: string) => {
  const res = await axios.post(baseUrl, {
    title: title,
  });
  return res.data;
};

export const updateTodo = async (id: number, title: string) => {
  await axios.put(`${baseUrl}/${id}`, { title: title });
  return id;
};

export const deleteTodo = async (id: number) => {
  await axios.delete(`${baseUrl}/${id}`);
  return id;
};
