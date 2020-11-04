import React, { useState, useEffect } from "react";
import Todo from "./Todo";

function Todolist() {
  const initTodos = [
    {
      text: "play Switch",
      isCompleted: false
    },
    {
      text: "play xBox",
      isCompleted: false
    },
    {
      text: "play PlayStation",
      isCompleted: false
    }
  ];
  const [todos, setTodos] = useState(initTodos);

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} />
      ))}
    </div>
  );
}

export default Todolist;
