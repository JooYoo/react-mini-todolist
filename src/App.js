import React, { useState } from "react";
import "./styles.css";

export default function App() {
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
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index}>
            {index}
            {todo.text}
          </div>
        ))}
      </div>
    </div>
  );
}
