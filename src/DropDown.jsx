import React, { useState, useEffect } from "react";
import "./css/dropdownstyle.css";

export default function DropDown() {
  const [dropdownState, setDropdownState] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };
  const handleSetDropdownValue = (value) => {
    setDropdownValue(value);
    setDropdownState(!dropdownState);
  };

  return (
    <>
    <div>
      <div className={`dropdown`}>
        <button onClick={handleDropdownClick} className="dropdown-btn">
          {dropdownValue === "" ? "Dropdown" : dropdownValue}
        </button>
        <div
          className={`dropdown-items ${
            dropdownState ? "isVisible" : "isHidden"
          }`}
        >
          <div className="dropdown-item">
            <div
              className="dropdown__link"
              onClick={() => handleSetDropdownValue("value 01")}
            >
              Item 01
            </div>
          </div>
          <div className="dropdown-item">
            <div
              className="dropdown__link"
              onClick={() => handleSetDropdownValue("value 02")}
            >
              Item 02
            </div>
          </div>
          <div className="dropdown-item">
            <div
              className="dropdown__link"
              onClick={() => handleSetDropdownValue("value 03")}
            >
              Item 03
            </div>
          </div>
          <div className="dropdown-item">
            <div
              className="dropdown__link"
              onClick={() => handleSetDropdownValue("value 04")}
            >
              Item 04
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


