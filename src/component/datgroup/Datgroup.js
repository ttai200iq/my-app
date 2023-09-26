import React, { useContext } from "react";
import "./Datgroup.scss";
import Button from "../Lib/Button";
import Setting from "../Lib/Setting";
import BarChart from "../Lib/BarChart";
import { EnvContext } from "../context/EnvContext";

export default function Datgroup() {
  const { button, type, bardata, envDispatch } = useContext(EnvContext);
  const handleChangeLib = (e) => {
    var temp = e.currentTarget.value;
    envDispatch({ type: "SET_TYPE", payload: temp });
  };

  return (
    <div className="DATGroup_Content">
      <div className="DATGroup_Content-Header">
        <div className="DATGroup_Content-Header-Avatars">
          <div className="DATGroup_Content-Header-Avatars-Heading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-grid"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            DAT Group
          </div>
          <div className="DATGroup_Content-Header-Avatars-SubHead">
            Create single and group avatars of different sizes with this custom
            component.
          </div>
        </div>
      </div>
      <div className="DATGroup_Content-SelectLib">
        <select
          style={{ margin: "auto !important" }}
          onChange={(e) => handleChangeLib(e)}
        >
          <option value={"Button"}>Button</option>
          <option value={"Bar"}>Bar</option>
        </select>
      </div>
      <div className="DATGroup_Content-Container">
        <div className="DATGroup_Content-Container-Group">
          <div className="DATGroup_Content-Container-Group-ListTag">
            <div className="DATGroup_Content-Container-Group-ListTag-Tag">
              <div className="DATGroup_Content-Container-Group-ListTag-Tag-Info">
                <div className="DATGroup_Content-Container-Group-ListTag-Tag-Info-Head">
                  Giao diện
                </div>
                <div className="DATGroup_Content-Container-Group-ListTag-Tag-Info-Body">
                  <div className="DATGroup_Content-Container-Group-ListTag-Tag-Info-Body-Preview">
                    <div className="DATGroup_Content-Container-Group-ListTag-Tag-Info-Body-Preview-Content">
                      {(() => {
                        switch (type) {
                          case "Button":
                            return <Button setting={button}></Button>;
                          case "Bar":
                            return <BarChart setting={bardata}></BarChart>;
                            default:
                              <></>
                        }
                      })()}
                    </div>
                    <div className="DATGroup_Content-Container-Group-ListTag-Tag-Info-Body-Preview-Text">
                      {/* vxcx */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="DATGroup_Content-Container-Group-ListTag">
            <div className="DATGroup_Content-Container-Group-ListTag-Tag">
              <div className="DATGroup_Content-Container-Group-ListTag-Tag-Info">
                <div className="DATGroup_Content-Container-Group-ListTag-Tag-Info-Head">
                  Cài đặt
                </div>
                <div className="DATGroup_Content-Container-Group-ListTag-Tag-Info-Body">
                  <div className="DATGroup_Content-Container-Group-ListTag-Tag-Info-Body-Preview">
                    <div className="DATGroup_Content-Container-Group-ListTag-Tag-Info-Body-Preview-Content">
                      <Setting></Setting>
                    </div>
                    <div className="DATGroup_Content-Container-Group-ListTag-Tag-Info-Body-Preview-Text">
                      {/* vxcx */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
