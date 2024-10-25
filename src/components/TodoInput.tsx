import React, { useState } from "react";
import TodoAddModal from "./TodoAddModal";

function TodoInput() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>+ Todoを追加する</button>
      {showModal && <TodoAddModal handleCloseModal={handleCloseModal} />}
    </div>
  );
}

export default TodoInput;
