import React from "react";
import './swicht.css'
const Swicht = ({handleChangeDark}) => {
  return (
    <label className="switch">
      <input type="checkbox" onClick={handleChangeDark} />
      <span className="slider"></span>
    </label>
  );
};

export default Swicht;
