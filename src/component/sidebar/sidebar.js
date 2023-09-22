import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  const [drop, setDrop] = useState("Default");
  const [state, setState] = useState(false);

  useEffect(()=>{
    // var newdata = data;
    // newdata = newdata.filter(newdata => newdata.id==2)
    // console.log(data,newdata)
    // setInfo(newdata[0].name)
    // setMail(newdata[0].mail)
    console.log("sidebar", props.name, props.mail)

  },[props])//dependencies

  const handleDrop = (e) => {
    var id = e.currentTarget.id; //-->Hompage(id cua the a)
    if (state) {
      if (drop !== id) {
        setDrop(id);
      } else {
        setDrop("Default");
        setState(false);
      }
    } else {
      setDrop(id);
      setState(true);
    }

    // var get = document.getElementById(id + "_Drop"); // phai lay id cua dropdown Hompage + _Drop
    // var Arr = document.getElementById(id + "_Arrow"); // phai lay id cua arrow Hompage + _Arrow
    // if (get.style.display === "block") {
    //   get.style.display = "none";
    //   Arr.style.rotate = "-90deg";
    // } else {
    //   get.style.display = "block";
    //   Arr.style.rotate = "0deg";
    // }
  };

  return (
    <div className="DAT_Sidebar" id="Toggle_Drop">
      <div className="DAT_Sidebar-Function">
        <div className="DAT_Sidebar-Function-Body">
          <div className="DAT_Sidebar-Function-Body-Accordion">
            {/* Trang chủ  */}
            <Link  to="/" style={{ textDecoration: "none" }}>
              <div
                //href=""
                className="DAT_Sidebar-Function-Body-Accordion-Homepage"
                id="Homepage"
                onClick={(e) => {
                  handleDrop(e);
                }}
              >
                <div className="DAT_Sidebar-Function-Body-Accordion-Homepage-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-activity"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <label>Trang Chủ</label>
                <div
                  className="DAT_Sidebar-Function-Body-Accordion-Homepage-arrow"
                  id="Homepage_Arrow"
                >
                  <svg
                    className="svg-inline--fa fa-angle-down"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="angle-down"
                    width="14.38px"
                    height="10.78px"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    data-fa-i2svg=""
                    style={{
                      transform:
                        drop === "Homepage" ? "rotate(0deg)" : "rotate(-90deg)",
                    }}
                  >
                    <path
                      fill="currentColor"
                      d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>

            {drop === "Homepage" ? (
              <div
                className="DAT_Sidebar-Function-Body-Accordion-Collapse"
                id="Homepage_Drop"
              >
                <a href="#">Tự động hóa</a>
                <a href="#" style={{ color: "#0061f2" }}>Năng lượng mặt trời</a>
                <a href="#">Thang máy</a>
                <a href="#">UPS</a>
              </div>
            ) : (
              <></>
            )}

            {/* Vị trí */}
            <a
              href="#"
              className="DAT_Sidebar-Function-Body-Accordion-Location"
              id="Location"
              onClick={(e) => {
                handleDrop(e);
              }}
            >
              <div className="DAT_Sidebar-Function-Body-Accordion-Location-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-filter"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
              </div>
              <label>Vị Trí</label>
            </a>
            {drop === "Location" ? (
              <div
                className="DAT_Sidebar-Function-Body-Accordion-ListLocation"
                id="Location_Drop"
              >
              </div>
            ) : (
              <></>
            )}

            {/* Thông báo */}
            <a
              href="#"
              className="DAT_Sidebar-Function-Body-Accordion-Notifications"
              id="Notifications"
              onClick={(e) => {
                handleDrop(e);
              }}
            >
              <div className="DAT_Sidebar-Function-Body-Accordion-Notifications-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bell"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <label>Thông Báo</label>
            </a>
            {drop === "Notifications" ? (
              <div
                className="DAT_Sidebar-Function-Body-Accordion-ListNotifications"
                id="Notifications_Drop"
              >
                {/* <a>Lịch sử truy cập</a>
                <a>Lịch sử cài đặt</a> */}
              </div>
            ) : (
              <></>
            )}

            {/* SMS */}
            <a
              href="#"
              className="DAT_Sidebar-Function-Body-Accordion-SMS"
              id="SMS"
              onClick={(e) => {
                handleDrop(e);
              }}
            >
              <div className="DAT_Sidebar-Function-Body-Accordion-SMS-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-mail"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <label>SMS</label>
            </a>
            {drop === "SMS" ? (
              <div
                className="DAT_Sidebar-Function-Body-Accordion-ListSMS"
                id="SMS_Drop"
              >
              </div>
            ) : (
              <></>
            )}

            {/* Báo cáo */}
            <a
              href="#"
              className="DAT_Sidebar-Function-Body-Accordion-Report"
              id="Report"
              onClick={(e) => {
                handleDrop(e);
              }}
            >
              <div className="DAT_Sidebar-Function-Body-Accordion-Report-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-repeat"
                >
                  <polyline points="17 1 21 5 17 9"></polyline>
                  <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                  <polyline points="7 23 3 19 7 15"></polyline>
                  <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                </svg>
              </div>
              <label>Báo cáo</label>
              <div
                className="DAT_Sidebar-Function-Body-Accordion-Report-arrow"
                id="Report_Arrow"
              >
                <svg
                  className="svg-inline--fa fa-angle-down"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-down"
                  width="14.38px"
                  height="10.78px"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                  style={{
                    transform:
                      drop === "Report" ? "rotate(0deg)" : "rotate(-90deg)",
                  }}
                >
                  <path
                    fill="currentColor"
                    d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  ></path>
                </svg>
              </div>
            </a>
            {drop === "Report" ? (
              <div
                className="DAT_Sidebar-Function-Body-Accordion-ListReport"
                id="Report_Drop"
              >
                <a href="#">Báo cáo lỗi</a>
                <a href="#">Xuất báo cáo</a>
              </div>
            ) : (
              <></>
            )}

            {/* Cài đặt */}
            <a
              href="#"
              className="DAT_Sidebar-Function-Body-Accordion-Settings"
              id="Settings"
              onClick={(e) => {
                handleDrop(e);
              }}
            >
              <div className="DAT_Sidebar-Function-Body-Accordion-Settings-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-tool"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <label>Cài Đặt</label>
              <div
                className="DAT_Sidebar-Function-Body-Accordion-Settings-arrow"
                id="Settings_Arrow"
              >
                <svg
                  className="svg-inline--fa fa-angle-down"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-down"
                  width="14.38px"
                  height="10.78px"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                  style={{
                    transform:
                      drop === "Settings" ? "rotate(0deg)" : "rotate(-90deg)",
                  }}
                >
                  <path
                    fill="currentColor"
                    d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  ></path>
                </svg>
              </div>
            </a>
            {drop === "Settings" ? (
              <div
                className="DAT_Sidebar-Function-Body-Accordion-ListSettings"
                id="Settings_Drop"
              >
                <a href="#">Tài khoản</a>
                <a href="#">Thiết bị</a>
              </div>
            ) : (
              <></>
            )}

            {/* Thông tin về DAT Group  */}
            <Link id="RouterNavLink" to="/Datgroup" style={{ textDecoration: "none" }}>
              <div
                //href="#"
                className="DAT_Sidebar-Function-Body-Accordion-MoreInfo"
                id="MoreInfo"
                onClick={(e) => {
                  handleDrop(e);
                }}
              >
                <div className="DAT_Sidebar-Function-Body-Accordion-MoreInfo-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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
                </div>
                <label>DAT Group</label>
                {/* <div
                className="DAT_Sidebar-Function-Body-Accordion-MoreInfo-arrow"
                id="MoreInfo_Arrow"
              >
                <svg
                  className="svg-inline--fa fa-angle-down"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-down"
                  width="14.38px"
                  height="10.78px"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                  style={{
                    transform:
                      drop === "MoreInfo" ? "rotate(0deg)" : "rotate(-90deg)",
                  }}
                >
                  <path
                    fill="currentColor"
                    d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  ></path>
                </svg>
              </div> */}
              </div>
            </Link>
            {drop === "MoreInfo" ? (
              <div
                className="DAT_Sidebar-Function-Body-Accordion-ListMoreInfo"
                id="MoreInfo_Drop"
              >
                {/* <a>Lịch sử truy cập</a>
                <a>Lịch sử cài đặt</a> */}
              </div>
            ) : (
              <></>
            )}

            {/* <div className="DAT_Sidebar-Function-Body-Accordion-Location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-globe"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              Nhật ký
              <svg
                className="DAT_Sidebar-Function-Body-Accordion-Location-Icon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-down"
                width="14.38px"
                height="10.78px"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                ></path>
              </svg>
            </div>
            <div className="DAT_Sidebar-Function-Body-Accordion-Report">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bar-chart"
              >
                <line x1="12" y1="20" x2="12" y2="10"></line>
                <line x1="18" y1="20" x2="18" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="16"></line>
              </svg>
              Báo cáo
              <svg
                className="DAT_Sidebar-Function-Body-Accordion-Report-Icon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-down"
                width="14.38px"
                height="10.78px"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                ></path>
              </svg>
            </div>
            <div className="DAT_Sidebar-Function-Body-Accordion-Settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-tool"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              Cài đặt
              <svg
                className="DAT_Sidebar-Function-Body-Accordion-Settings-Icon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-down"
                width="14.38px"
                height="10.78px"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                ></path>
              </svg>
            </div> */}
          </div>
          <div className="DAT_Sidebar-Function-Footer"></div>
        </div>
      </div>
    </div>
  );
}
