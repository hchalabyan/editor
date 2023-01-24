import React from "react";

const EditableInput = (props) => {
  return (
    <label htmlFor="color" className="Select">
      <input
        type={props.type}
        onChange={props.handleInputChange}
        value={props.value}
        id="color"
        autocomplete="false"
      />
      <span>{props.value}</span>
    </label>
  );
};

export default EditableInput;
