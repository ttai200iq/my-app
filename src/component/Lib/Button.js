import React, { useEffect, useReducer, useState, useContext } from "react";
import "./Setting.scss";


export default function Button(props) {
  const [state, setState] = useState(false);
  const [press, setPress] = useState(false);



  const handleChangeButtonColor = () => {
    
  }
  const handleMouseUp = () => {
    setPress(false);
  };
  const handleMouseDown = () => {
    setPress(true);
  };
  const handleInvert = (e) => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };
  return (
    <div className="DAT_Button">
      {/*InvertButton */}
      { props.setting.btntype === "Invert" ? (
        <div
          className="DAT_Button-InvertButton"
          style={{ backgroundColor: state === true ? "green" : props.setting.btnbgcoloron }}
          onClick={(e) => {
            handleInvert(e);
          }}
        >
          {state ? "Bật" : "Tắt"}
        </div>
      ) : (
        <div
          className="DAT_Button-InchingButton"
          onMouseUp={handleMouseUp}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUp}
          style={{ backgroundColor: press === true ? "green" : "red" }}
        >
          {press ? "Bật" : "Tắt"}
        </div>
      )}

      {/* InchingButton */}
    </div>
  );
}
