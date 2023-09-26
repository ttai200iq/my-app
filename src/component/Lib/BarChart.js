import React, { useContext, useState } from "react";
import "./Setting.scss";
//import { Bar } from "react-chartjs-2";

export default function BarChart(props) {
  return (
    <div className="DAT_Bar">
      <div className="DAT_Bar-Tank">
        <div className="DAT_Bar-Tank-Max">{props.setting.max}</div>
        <div
          className="DAT_Bar-Tank-Value"
          style={{
            height:
              (
                ((100 - 0) / (parseFloat(props.setting.max) - parseFloat(props.setting.min))) *
                (parseFloat(props.setting.realdata) - parseFloat(props.setting.min))
              ).toFixed(2) + "%",
          }}
        >
          <p>{props.setting.realdata}</p>
        </div>
        <div className="DAT_Bar-Tank-Min">{props.setting.min}</div>
      </div>
      <div className="DAT_Bar-Ruler"></div>
    </div>
  );
}
