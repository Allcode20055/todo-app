import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import "./newtodo.css";

export const NewTodo = (props) => {
  const [newTodo, setNewTodo] = useState({});
  const { title, dasc } = newTodo;

  const handelChangeValue = (e) => {
    setNewTodo((prevTodo) => {
      return { ...prevTodo, id: uuidv4(), [e.target.name]: e.target.value };
    });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    props.onHandelNewTodo(newTodo);

    setNewTodo({ title: "", dasc: "" });
  };

  return (
    <div className="new-todo">
      <form onSubmit={handelSubmit}>
        <div className="todo-form">
          <label htmlFor="title">Title: </label>
          <input
            value={title || ""}
            type="text"
            name="title"
            id="title"
            placeholder="Enter the title"
            onChange={handelChangeValue}
          />
        </div>

        <div className="todo-form">
          <label htmlFor="dasc">Dascription</label>
          <textarea
            type="text"
            name="dasc"
            id="dasc"
            value={dasc}
            placeholder="Enter the dascription"
            onChange={handelChangeValue}
          ></textarea>
        </div>

        <div>
          <button className="form-btn">Add Todo</button>
        </div>
      </form>
    </div>
  );
};
