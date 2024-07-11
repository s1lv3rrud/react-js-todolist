import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={toggleTodo} />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={deleteTodo}>삭제</button>
    </li>
  );
};

export default TodoItem;
