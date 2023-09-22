import React, { useContext, useEffect, useReducer } from "react";
import "./Datgroup.scss";
import Button from "../Lib/Button";
import Setting from "../Lib/Setting";

import Bar from "../Lib/Bar";
import { EnvContext } from "../context/EnvContext";



export default function Datgroup() {
  const { button, envDispatch } = useContext(EnvContext);



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
                     <Button  setting={button}></Button>
                     <Bar></Bar>
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
