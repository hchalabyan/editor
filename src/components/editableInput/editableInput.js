import React from "react";

const EditableButton = (props) => {
  return (
    <button
      onMouseDown={(evt) => {
        evt.preventDefault();
        document.execCommand(props.commandBtn, false, props.changeValue);
      }}
    >
      click
    </button>
  );
};

export default EditableButton;
