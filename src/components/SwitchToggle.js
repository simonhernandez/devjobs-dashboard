import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const SwitchToggle = () => {

  const [colorTheme, setTheme] = useDarkMode();

  const handleOnChange = () => {
    setTheme(colorTheme);
  }

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onChange={handleOnChange}/>
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default SwitchToggle;
