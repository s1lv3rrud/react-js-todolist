import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <li>
      {todo.text}
      <button onClick={deleteTodo}>삭제</button>
    </li>
  );
};

export default TodoItem;
