import React, { useState } from "react";

const Editor = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("name")) || false
  );

  return (
    <div
      className="Editor__element"
      contentEditable={true}
      id="Editor"
      suppressContentEditableWarning
    >
      {data}
    </div>
  );
};
export default Editor;
