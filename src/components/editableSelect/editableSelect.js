import React from "react";

const EditableSelect = (props) => {
  const handleFontChange = (evt) => {
    evt.preventDefault();
    console.log("evt", evt.target.value);
    document.execCommand(
      props.command ? props.command : evt.target.value,
      false,
      evt.target.value
    );
  };
  return (
    <>
      <select
        name={props.dataName}
        id={props.dataName}
        onChange={(evt) => handleFontChange(evt)}
        className="Select"
      >
        {props.data.map((item) => {
          return (
            <option value={item.value} key={item.id}>
              {item.text}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default EditableSelect;
