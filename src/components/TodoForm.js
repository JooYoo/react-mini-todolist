import React, { useState } from "react";

function TodoForm() {
  const initInputVal = "";
  const [inputVal, setInputVal] = useState(initInputVal);

  const submitFormHandler = (e) => {
    // prevent page refresh when submit
    e.preventDefault();
    // prevent empty input
    if (!inputVal) return;
    //TODO: addTodo()
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
        onChange={(e) => setInputValHandler}
      />
    </form>
  );
}

export default TodoForm;
