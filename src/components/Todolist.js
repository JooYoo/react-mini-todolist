import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

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

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} />
      ))}
    </div>
  );
}

export default Todolist;
