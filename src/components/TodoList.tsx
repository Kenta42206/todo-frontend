import React, { useEffect, useState } from "react";
import TodoCell from "./TodoCell";
import { Todo, TodoRef } from "../Type/Todo";
import { getTodoList } from "../features/todoAPI";
import axios from "axios";

function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/todo")
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => {
        console.error("request erroe", err);
      });
  }, []);
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-4">
      {todoList?.map((todo) => {
        return <TodoCell todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default TodoList;
