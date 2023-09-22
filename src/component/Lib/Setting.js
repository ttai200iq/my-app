import React, { useContext, useEffect, useState } from "react";
import "./Setting.scss";
import { EnvContext } from "../context/EnvContext";
// import { SketchPicker } from 'react-color'

export default function Setting() {
  const { button, envDispatch } = useContext(EnvContext);

  const handleTakeColor = (e) => {
    var atr = e.currentTarget.value;
    button.btnbgcoloron = atr
    envDispatch({ type: "SET_BTN", payload: button});
    //envDispatch({type: "SET_BTN_BGCOLOR", payload: atr})
  }

  // useEffect(() => {
  //   console.log("btnbgcoloron ",btnbgcoloron);
  // }, [btnbgcoloron]);

  const handleChangebutton = (e) => {
    var value = e.currentTarget.value;
    button.btntype = value
    envDispatch({ type: "SET_BTN", payload: button});
  };


  return (
    <div className="DAT_Setting">
      <div className="DAT_Setting-Table">
        <div className="DAT_Setting-Table-Row1">
          <input
            className="DAT_Setting-Table-Row1-Statement"
            placeholder="ON:7"
          ></input>
          <input
            className="DAT_Setting-Table-Row1-Text"
            placeholder="Text: Bật"
          ></input>
          <input
            className="DAT_Setting-Table-Row1-Fontsize"
            type="number"
            defaultValue={10}
            min={6}
            max={100}
            step={2}
          ></input>
          <input
            className="DAT_Setting-Table-Row1-Buttoncolor"
            type="color"
            id="favcolor"
            name="favcolor"
            value= {button.btnbgcoloron}
            onChange={(e)=>handleTakeColor(e)}
          ></input>
          <button>Chọn</button>
        </div>
        <div className="DAT_Setting-Table-Row2">
          <input
            className="DAT_Setting-Table-Row-Statement"
            placeholder="OFF:8"
          ></input>
          <input
            className="DAT_Setting-Table-Row-Text"
            placeholder="Text: Bật"
          ></input>
          <input
            className="DAT_Setting-Table-Row-Fontsize"
            type="number"
            defaultValue={10}
            step={2}
            min={6}
            max={100}
          ></input>
          <input
            className="DAT_Setting-Table-Row-Buttoncolor"
            placeholder="Màu button"
          ></input>
          <button>Chọn</button>
        </div>
        <div className="DAT_Setting-Table-Row3">
          <input
            className="DAT_Setting-Table-Row-Statement"
            placeholder="Width: 161"
          ></input>
          <input
            className="DAT_Setting-Table-Row-Buttoncolor"
            placeholder="Height: 83"
          ></input>
          <button>Chọn</button>
        </div>
        <div className="DAT_Setting-Table-Row4">
          <select onChange={(e) => handleChangebutton(e)}>
            <option value="Inching">Inching</option>
            <option value="Invert">Invert</option>
          </select>
        </div>
        <div className="DAT_Setting-Table-Row5">
          <input placeholder="Nhập thanh ghi"></input>
          <button>Chọn</button>
        </div>
        <div className="DAT_Setting-Table-Row6">
          <input placeholder="0"></input>
          <button>Chọn</button>
        </div>
      </div>
    </div>
  );
}
