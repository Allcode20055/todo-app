import React from "react";
import { MdDelete } from "react-icons/md";
import style from "./todo.module.css";

export const Todo = ({ todo, id, onHandelId }) => {
  const { title, dasc } = todo;

  return (
    <article className={style["todo-article"]}>
      <div className={style["todo-message"]}>
        <h1>{title}</h1>
        <p>{dasc}</p>
      </div>
      <div>
        <span>
          <MdDelete
            className={style["todo-btn"]}
            onClick={() => onHandelId(id)}
          />
        </span>
      </div>
    </article>
  );
};
