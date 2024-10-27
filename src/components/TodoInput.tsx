import React, { ChangeEvent, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

type Props = {
  title: string;
  handleAddNewTodo: () => void;
  handleValueChange: (val: string) => void;
};

function TodoInput({ title, handleAddNewTodo, handleValueChange }: Props) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    handleValueChange(val);
  };

  return (
    <div className="flex justify-center border-gray-500">
      <input
        type="text"
        value={title}
        className="p-2.5 z-20 text-sm text-gray-900 bg-gray-50  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
        placeholder="Text new Todo..."
        required
        onChange={handleInputChange}
      />
      <button onClick={handleAddNewTodo} className="ml-2">
        <FaPlusCircle size="1.5rem" />
      </button>
    </div>
  );
}

export default TodoInput;
