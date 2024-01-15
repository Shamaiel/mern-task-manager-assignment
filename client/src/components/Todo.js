import React from "react";

const ToDo = ({text,updateMode,deleteToDo}) => {
  return (
    <div className="todo">
      <div className="text">{text} </div>
      <div className="icons">
        <span className="material-symbols-outlined" onClick={updateMode}>Edit</span>
        <span className="material-symbols-outlined" onClick={deleteToDo}>Delete</span>
      </div>
    </div>
  );
};

export default ToDo;
