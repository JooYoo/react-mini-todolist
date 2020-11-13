import React from "react";

function Todo(props) {
  return (
    <div>
      {props.index} {props.todo.text}
    </div>
  );
}

export default Todo;
