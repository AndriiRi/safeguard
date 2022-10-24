import React from "react";
import "./UI/ButtonHover.css";
const WhiteButton = (props) => {
  return (
    <button
      style={{
        background: "#fff",
        borderRadius: "10px",
        padding: "10px",
        minWidth: "160px",
        minHeight: "60px",

        boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.425)",
      }}
      className="whiteButton"
    >
      {props.children}
    </button>
  );
};

export default WhiteButton;
