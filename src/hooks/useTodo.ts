import { useEffect, useState } from "react";
import { Todo } from "../Type/Todo";
import {
  addNewTodo,
  deleteTodo,
  getTodoList,
  updateTodo,
} from "../features/todoAPI";

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  useEffect(() => {
    getAllTodo();
  }, []);

  const getAllTodo = () => {
    getTodoList()
      .then((todo) => {
        setTodoList(todo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNewTodoCell = (title: string) => {
    const inputTitle = title;
    addNewTodo(inputTitle)
      .then((todo) => {
        setTodoList([todo, ...todoList]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const updateTodoCell = (id: number, title: string) => {
    updateTodo(id, title).then((todo) => {
      console.log(todo);
    });
  };

  const deleteTodoCell = (id: number) => {
    deleteTodo(id).then((todo) => {
      getAllTodo();
    });
  };

  return { todoList, addNewTodoCell, updateTodoCell, deleteTodoCell };
};
