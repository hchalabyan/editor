import React from "react";

const EditableButton = (props) => {
  return (
    <div className="Sidebar__RadioGroup">
      <input
        type="radio"
        className="Sidebar__alignButton"
        name="editableButton"
        id={props.arg}
        value={props.arg}
        checked={props.checked}
        onChange={props.onChangeHandler}
      />
      <label htmlFor={props.arg}>{props.icon}</label>
    </div>
  );
};
export default EditableButton;
