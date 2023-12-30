import React from "react";
import { Todo } from "./Todo";

export const Todos = (props) => {
  return (
    <section className="todos-section ">
      {props.todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            id={todo.id}
            key={todo.id}
            onHandelId={props.onHandelId}
          />
        );
      })}
    </section>
  );
};
