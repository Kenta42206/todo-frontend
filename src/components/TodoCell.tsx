import React from "react";
import { Todo } from "../Type/Todo";

interface Props {
  todo: Todo;
  deleteTodoCell: any;
}

function TodoCell({ todo, deleteTodoCell }: Props) {
  const deleteTodo = () => deleteTodoCell(todo.id);
  return (
    <div>
      <div className="px-4 py-5 sm:px-6 border-b-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {todo.title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {todo.limit_date}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500">
            Status:{" "}
            {!todo.done ? (
              <span className="text-green-600">Active</span>
            ) : (
              <span>Done</span>
            )}
          </p>
          <p className="font-medium text-indigo-600 hover:text-indigo-500">
            Edit
          </p>
          <button
            onClick={deleteTodo}
            className="font-medium text-red-600 hover:text-red-500"
          >
            trash
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoCell;
