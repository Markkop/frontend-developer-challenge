import React from "react";

const SizeTool = () => {
  // Quando clica, pega o valor

  const handleClick = () => {
    const defaultFontSize = document.documentElement.style.getPropertyValue(
      "--default-font-size"
    );
    console.log(defaultFontSize);

    document.documentElement.style.setProperty("--default-font-size", "20px");
  };

  return (
    <div className="sizeToolContainer">
      <button onClick={() => handleClick()}>+</button>
      <button>-</button>
    </div>
  );
};

export default SizeTool;
