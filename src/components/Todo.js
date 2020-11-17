import React from "react";

function Todo(props) {
  return (
    <div>
      <div
        style={{ textDecoration: props.todo.isCompleted ? "line-through" : "" }}
      >
        <button onClick={() => props.completeTodo(props.index)}>DONE</button>
        {props.index} {props.todo.text}
      </div>
    </div>
  );
}

export default Todo;
