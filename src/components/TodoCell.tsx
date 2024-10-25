import React from "react";
import { Todo, TodoRef } from "../Type/Todo";

interface todoCellProps {
  todo: Todo;
}

function TodoCell(todo: todoCellProps) {
  return (
    <div>
      <div className="px-4 py-5 sm:px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {todo.todo.title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {todo.todo.limit_date}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500">
            Status:{" "}
            {!todo.todo.done ? (
              <span className="text-green-600">Active</span>
            ) : (
              <span>Done</span>
            )}
          </p>
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Edit
          </a>
        </div>
      </div>
    </div>
  );
}

export default TodoCell;
