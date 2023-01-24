import React, { useState } from "react";
import EditableSelect from "../editableSelect/editableSelect";
import EditableInput from "../editableInput/editableInput";
import EditableButton from "../editableButton/editableButton";

import AlignLeft from "../../assets/icons/alignLeft.js";
import AlignCenter from "../../assets/icons/alignCenter.js";
import AlignRight from "../../assets/icons/alignRight.js";
import AlignJustify from "../../assets/icons/alignJustify.js";

const SideBar = () => {
  const [color, setColor] = useState("#292929");
  const [selected, setSelected] = useState("");

  const fontFamilyList = [
    { id: 0, value: "FiraSansRegular", text: "Fira Sans Regular" },
    { id: 1, value: "FiraSansSemiBold", text: "Fira Sans SemiBold" },
    { id: 2, value: "FiraSansBold", text: "Fira Sans Bold" },
  ];

  const fontStyle = [
    { id: 0, value: "bold", text: "Bold" },
    { id: 1, value: "italic", text: "Italic" },
    { id: 2, value: "underline", text: "Underline" },
  ];
  const handleChange = (evt) => {
    const selectText = document.getElementById("Editor");
    selectText.style.fontSize = `${evt.target.value}px`;
  };
  const handleColorChange = (evt) => {
    evt.preventDefault();
    console.log("evt", evt.target.value);
    document.execCommand("foreColor", false, evt.target.value);
    setColor(evt.target.value);
  };

  const handleLineHeight = (evt) => {
    const selectText = document.getElementById("Editor");
    selectText.style.lineHeight = `${evt.target.value}%`;
  };
  const handleLetterSpacingHeight = (evt) => {
    const selectText = document.getElementById("Editor");
    selectText.style.letterSpacing = `${evt.target.value}px`;
  };
  const onChangeRadioHandler = (evt) => {
    setSelected(evt.target.value);
    const selectText = document.getElementById("Editor");
    selectText.style.textAlign = evt.target.value;
  };
  const onSaveHandler = () => {
    const selectText = document.getElementById("Editor").textContent;
    localStorage.setItem("name", JSON.stringify(selectText));
  };
  return (
    <>
      <p className="Sidebar__paragraph">Text</p>
      <div className="Sidebar__selectFont">
        <EditableSelect
          data={fontFamilyList}
          command="fontName"
          id="fontFamilyList"
        />
      </div>
      <div className="Sidebar__fontStyle">
        <div className="Sidebar__fontWeight">
          <EditableSelect data={fontStyle} id="fontStyle" />
        </div>
        <div className="Sidebar__fontStyle__icons">
          <EditableInput
            handleInputChange={(e) => handleChange(e)}
            type="number"
          />
        </div>
      </div>
      <div className="Sidebar__selectColor ">
        <EditableInput
          handleInputChange={(e) => handleColorChange(e)}
          value={color}
          type="color"
        />
      </div>
      <div className="Sidebar__inputsWrapper">
        <div className="Sidebar__lineHeight">
          <EditableInput
            handleInputChange={(e) => handleLineHeight(e)}
            type="text"
          />
          <span>%</span>
        </div>
        <div className="Sidebar__letterSpacing">
          <EditableInput
            handleInputChange={(e) => handleLetterSpacingHeight(e)}
            type="text"
          />
          <span>px</span>
        </div>
      </div>
      <div className="Sidebar__buttonsWrapper">
        <EditableButton
          cmd="justifyLeft"
          arg="left"
          icon=<AlignLeft />
          onChangeHandler={(e) => onChangeRadioHandler(e)}
          checked={selected === "left"}
        />
        <EditableButton
          cmd="justifyCenter"
          arg="center"
          icon=<AlignCenter />
          onChangeHandler={(e) => onChangeRadioHandler(e)}
          checked={selected === "center"}
        />
        <EditableButton
          cmd="justifyRight"
          arg="right"
          icon=<AlignRight />
          onChangeHandler={(e) => onChangeRadioHandler(e)}
          checked={selected === "right"}
        />
        <EditableButton
          cmd="justifyFull"
          arg="justify"
          icon=<AlignJustify />
          onChangeHandler={(e) => onChangeRadioHandler(e)}
          checked={selected === "justify"}
        />
      </div>
      <button className="Sidebar__button" onClick={onSaveHandler}>
        Apply Changes
      </button>
    </>
  );
};
export default SideBar;
