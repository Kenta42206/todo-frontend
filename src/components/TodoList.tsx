import React, { useEffect, useState } from "react";
import TodoCell from "./TodoCell";
import { Todo } from "../Type/Todo";

type Props = {
  todoList: Todo[];
  deleteTodoCell: (id: number) => void;
};

function TodoList({ todoList, deleteTodoCell }: Props) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-4">
      {todoList?.map((todo) => {
        return (
          <TodoCell todo={todo} key={todo.id} deleteTodoCell={deleteTodoCell} />
        );
      })}
    </div>
  );
}

export default TodoList;
