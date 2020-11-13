import React, { useState } from "react";

function TodoForm(props) {
  const initInputVal = "";
  const [inputVal, setInputVal] = useState(initInputVal);

  const submitFormHandler = (e) => {
    // prevent page refresh when submit
    e.preventDefault();
    // prevent empty input
    if (!inputVal) return;
    // add new Todo
    props.addTodo(inputVal);
    // clear input textbox
    setInputVal("");
  };

  const setInputValHandler = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputValHandler(e)}
      />
    </form>
  );
}

export default TodoForm;
