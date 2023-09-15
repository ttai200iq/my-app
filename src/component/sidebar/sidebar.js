import React from "react";
import "./sidebar.scss";

export default function Sidebar() {
  const handleDrop = (e) => {
    var id = e.currentTarget.id;//-->Hompage(id cua the a) 
    var get = document.getElementById(id + "_Drop");// phai lay id cua dropdown Hompage + _Drop
    var Arr= document.getElementById(id + '_Arrow');// phai lay id cua arrow Hompage + _Arrow
    if (get.style.display === "block") {
      get.style.display = "none";
      Arr.style.rotate = '-90deg'
    } else {
      get.style.display = "block";
      Arr.style.rotate = '0deg'
   
    }
  };

  return (
    <div className="DAT_Sidebar" id="Toggle_Drop">
      <div className="DAT_Sidebar-Function">
        <div className="DAT_Sidebar-Function-Body">
          <div className="DAT_Sidebar-Function-Body-Accordion">
            <a
              href="#"
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-activity"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <label>Trang Chủ</label>
              <div className="DAT_Sidebar-Function-Body-Accordion-Homepage-arrow" id="Homepage_Arrow">
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
                >
                  <path
                    fill="currentColor"
                    d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  ></path>
                </svg>
              </div>
            </a>
            <div className="DAT_Sidebar-Function-Body-Accordion-Collapse" id="Homepage_Drop">
              <a>Tự động hóa</a>
              <a style={{ color: "#0061f2" }}>Năng lượng mặt trời</a>
              <a>Thang máy</a>
              <a>UPS</a>
            </div>
            <div className="DAT_Sidebar-Function-Body-Accordion-Diary">
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
                className="DAT_Sidebar-Function-Body-Accordion-Diary-Icon"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-bar-chart"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-tool"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              Cài đặt
              <svg
                class="DAT_Sidebar-Function-Body-Accordion-Settings-Icon"
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
          </div>
          <div className="DAT_Sidebar-Function-Footer"></div>
        </div>
      </div>
    </div>
  );
}
