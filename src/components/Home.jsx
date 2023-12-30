import React, { useState } from "react";

import { Todos } from "./Todos";
import { NewTodo } from "./NewTodo";

export const Home = () => {
  const [todos, setTodos] = useState([]);

  const onHandelNewTodo = (newTodos) => {
    setTodos([...todos, newTodos]);
  };

  const onHandelId = (id) => {
    setTodos(() => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className=" dummi my__text main-section">
      <div className="todo-title">
        <h2>Todo App</h2>
      </div>
      <NewTodo onHandelNewTodo={onHandelNewTodo} />
      <Todos todos={todos} onHandelId={onHandelId} />
    </div>
  );
};
