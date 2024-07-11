import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // setTodos가 비동기적으로 작동하므로 useEffect를 활용하여 todos 변경 확인
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
