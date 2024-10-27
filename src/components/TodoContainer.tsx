import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useTodo } from "../hooks/useTodo";

function TodoContainer() {
  const { todoList, addNewTodoCell, deleteTodoCell } = useTodo();
  const [title, setTitle] = useState("");

  const handleValueChange = (val: string) => {
    setTitle(val);
  };

  const handleAddNewTodo = () => {
    if (!title.trim()) return;
    addNewTodoCell(title);
    setTitle("");
  };
  return (
    <>
      <TodoInput
        title={title}
        handleAddNewTodo={handleAddNewTodo}
        handleValueChange={handleValueChange}
      />
      <TodoList todoList={todoList} deleteTodoCell={deleteTodoCell} />
    </>
  );
}

export default TodoContainer;
