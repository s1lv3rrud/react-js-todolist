import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          toggleTodo={() => toggleTodo(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
