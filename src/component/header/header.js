import React, { useState, useRef, useEffect } from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const data = [
  {
    id: 1,
    name: "Huu Huynh",
    age:"23",
    sex:"pede",
    mail:"huuhuynh@gmail.com"
  },
  {
    id: 2,
    name: "Tan Tai",
    age:"23",
    sex:"Nam tinh",
    mail:"tantai@gmail.com"
  },
  {
    id: 3,
    name: "PhuLo",
    age:"23",
    sex:"Nu tinh",
    mail:"phulo@gmail.com"
  }
]

export default function Header(props) {
  //reactHook
  const [drop, setDrop] = useState("Default"); //The hien tai
  const [state, setState] = useState(false); //trang thai
  const search = useRef("");
  const [info,setInfo] = useState("unknow");
  const [mail,setMail] = useState("unknow@gmail.com");
  // const [predrop, setPredrop] = useState("Default"); //The truoc do
  // console.log(drop,state)

  useEffect(()=>{
    // var newdata = data;
    // newdata = newdata.filter(newdata => newdata.id==2)
    // console.log(data,newdata)
    // setInfo(newdata[0].name)
    // setMail(newdata[0].mail)
    console.log("header", props.name, props.mail)

  },[props])//dependencies
  
  useEffect(()=>{
    console.log(drop);
  },[drop])


  
  const handleInput = (e) =>{
    console.log(search.current.value);
  }

  const handleDropdown = (e) => {
    var id = e.currentTarget.id; 
    if (state) {
      if (drop !== id ) {
        setDrop(id)        
      } else {
        setDrop("Default")
        setState(false)
      }
    } else {
      setDrop(id);
      setState(true);


      // console.log("Hien tai: ",drop,state)

    }
    // console.log(id, state);



    // var get = document.getElementById(id + '_Drop')
    // console.log("hello",get)
    // if(get.style.display==="block"){
    //   get.style.display="none"
    // }else{
    //   get.style.display="block"
    // }




    //dropdown by usestate+switch case
    // if (state === true) {
    //   //true
    //   if (id === predrop) {
    //     setState(false);
    //     setDrop("Default");
    //     setPredrop("Default");
    //     console.log("lan3")
    //   } else {
    //     setDrop(id);
    //     setPredrop(id);
    //     console.log("lan2")
    //   }
    // } else {
    //   //false
    //   setState(true);
    //   setDrop(id);
    //   setPredrop(id);
    //   console.log("lan1")
    // }


    // dropdown by document
    // var get = document.getElementById(id + "_Drop");
    // if (get.style.display === "block") {
    //   get.style.display = "none";
    // } else {
    //   get.style.display = "block";
    // }
  };

  const pushSidebar = (e) => {
    var id = e.currentTarget.id;
    var get = document.getElementById(id + "_Drop");
    // console.log(get);
    if (get.style.display === "block") {
      get.style.display = "none";
    } else {
      get.style.display = "block";
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="DAT_Header">
        <div className="DAT_Header-Menu">
          <button
            className="DAT_Header-Menu-Toggle"
            id="Toggle"
            onClick={(e) => {
              pushSidebar(e);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="DAT_Header-Left">
          <a href="#" className="navbar-brand pe-3 ps-4 ps-lg-2">
            DAT Group
          </a>
        </div>
        <div className="DAT_Header-Center">
          <div className="DAT_Header-Center-Group">
            <div className="DAT_Header-Center-Group-Searchbar">
              <input placeholder="Search"  onChange={(e) => handleInput(e)} ref={search} ></input>
              <div className="DAT_Header-Center-Group-Searchbar-Search">
                <SearchIcon fontSize="small" color="#69707a" />
              </div>
            </div>
          </div>
        </div>
        <div className="DAT_Header-Right">
          <ul className="DAT_Header-Right-Items">
            <li
              className="DAT_Header-Right-Items-Documentations"
              id="Document"
              onClick={(e) => {
                handleDropdown(e);
              }}
            >
              <button className="DAT_Header-Right-Items-Documentations-Title">
                <p>Documetations</p>
              </button>
              <button className="DAT_Header-Right-Items-Documentations-Icon">
                <KeyboardArrowRightIcon fontSize="small"></KeyboardArrowRightIcon>
              </button>
            </li>
            <li className="DAT_Header-Right-Items-Notifications">
              <button
                className="DAT_Header-Right-Items-Notifications-Icon"
                id="Notification"
                onClick={(e) => {
                  handleDropdown(e);
                }}
              >
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
                  opacity={70}
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </button>
            </li>
            <li className="DAT_Header-Right-Items-Messages">
              <button
                className="DAT_Header-Right-Items-Messages-Icon"
                id="Messages"
                onClick={(e) => {
                  handleDropdown(e);
                }}
              >
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
              </button>
            </li>
            <li className="DAT_Header-Right-Items-Users">
              <a href="#"
                className="DAT_Headeer-Right-Items-Users-Icon"
                id="Users"
                onClick={(e) => {
                  handleDropdown(e);
                }}
              >
                <img
                  className="img-fluid"
                  src="/img/profile-1.png"
                  style={{ height: "36px", borderRadius: "50%" }}
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* {(drop)?<></>:<></>} */}

      {(() => {
        switch (drop) {
          case "Document":
            return (
              <>
                {/* Documentation */}
                <div
                  className="DAT_Header-Documentsdropdown"
                  id="Document_Drop"
                  //style={{ display: "none" }}
                >
                  {/* Item1 */}
                  <a href="#" className="DAT_Header-Documentsdropdown-Item" id="Item1">
                    <div className="DAT_Header-Documentsdropdown-Item-Icon">
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
                        className="feather feather-book"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                    </div>
                    <div className="DAT_Header-Documentsdropdown-Item-Title">
                      <div
                        className="small text-gray-500"
                        style={{ fontSize: "12.6px", color: "gray" }}
                      >
                        Documentation
                      </div>
                      Usage instructions and reference
                    </div>
                  </a>
                  {/* Item2 */}
                  <a href="#" className="DAT_Header-Documentsdropdown-Item" id="Item2">
                    <div className="DAT_Header-Documentsdropdown-Item-Icon">
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
                        className="feather feather-code"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                    <div className="DAT_Header-Documentsdropdown-Item-Title">
                      <div
                        className="small text-gray-500"
                        style={{ fontSize: "12.6px", color: "gray" }}
                      >
                        Components
                      </div>
                      Code snippets and reference
                    </div>
                  </a>
                  {/*Item3*/}
                  <a href="#" className="DAT_Header-Documentsdropdown-Item" id="Item3">
                    <div className="DAT_Header-Documentsdropdown-Item-Icon">
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
                        className="feather feather-file-text"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <div className="DAT_Header-Documentsdropdown-Item-Title">
                      <div>
                        <div
                          className="small text-gray-500"
                          style={{ fontSize: "12.6px", color: "gray" }}
                        >
                          Changelog
                        </div>
                        Code snippets and reference
                      </div>
                    </div>
                  </a>
                </div>
              </>
            );
          case "Notification":
            return (
              <>
                {/* Notificate  */}
                <div
                  className="DAT_Header-Notidropdown"
                  id="Notification_Drop"
                >
                  <h6>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11.2"
                      height="11.2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-bell me-2"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>{" "}
                    Alert Center{" "}
                  </h6>
                  {/* Item1  */}
                  <a href="#" className="DAT_Header-Notidropdown-Item">
                    <div className="DAT_Header-Notidropdown-Item-Icon1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="13.6"
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
                    <div className="DAT_Header-Notidropdown-Item-Title">
                      <div
                        className="small text-gray-500"
                        style={{ fontSize: "11.2px", color: "gray" }}
                      >
                        December 29, 2021
                      </div>
                      This is an alert message. It's nothing serious, but it
                      requires your attention.
                    </div>
                  </a>
                  {/* Item2 */}
                  <a href="#" className="DAT_Header-Notidropdown-Item">
                    <div className="DAT_Header-Notidropdown-Item-Icon2" id="I1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="13.6"
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
                    </div>
                    <div className="DAT_Header-Notidropdown-Item-Title">
                      <div
                        className="small text-gray-500"
                        style={{ fontSize: "11.2px", color: "gray" }}
                      >
                        {/* Sua  */}
                        December 22, 2021
                      </div>
                      {/* Sua  */}A new monthly report is ready. Click here to
                      view!
                    </div>
                  </a>
                  {/* Item3  */}
                  <a href="#" className="DAT_Header-Notidropdown-Item">
                    <div className="DAT_Header-Notidropdown-Item-Icon3" id="I1">
                      <svg
                        className="svg-inline--fa fa-triangle-exclamation"
                        aria-hidden="true"
                        focusable="false"
                        width="13.6"
                        height="13.6"
                        data-prefix="fas"
                        data-icon="triangle-exclamation"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="DAT_Header-Notidropdown-Item-Title">
                      <div
                        className="small text-gray-500"
                        style={{ fontSize: "11.2px", color: "gray" }}
                      >
                        {/* Sua  */}
                        December 8, 2021
                      </div>
                      {/* Sua  */}Critical system failure, systems shutting
                      down.
                    </div>
                  </a>
                  {/* Item4  */}
                  <a href="#" className="DAT_Header-Notidropdown-Item">
                    <div className="DAT_Header-Notidropdown-Item-Icon4" id="I1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="13.6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-user-plus"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <line x1="20" y1="8" x2="20" y2="14"></line>
                        <line x1="23" y1="11" x2="17" y2="11"></line>
                      </svg>
                    </div>
                    <div className="DAT_Header-Notidropdown-Item-Title">
                      <div
                        className="small text-gray-500"
                        style={{ fontSize: "11.2px", color: "gray" }}
                      >
                        {/* Sua  */}
                        December 2, 2021
                      </div>
                      {/* Sua  */}New user request. Woody has requested access
                      to the organization.
                    </div>
                  </a>
                  {/* ViewAll  */}
                  <a href="#" className="DAT_Header-Notidropdown-ViewAll">
                    View All Alert
                  </a>
                </div>
              </>
            );
          case "Messages":
            return (
              <>
                {/* Message  */}
                <div
                  className="DAT_Header-MessageDropdown"
                  id="Messages_Drop"
                >
                  <h6>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11.2"
                      height="11.2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail me-2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Message Center{" "}
                  </h6>
                  {/* Item1  */}
                  <a href="#" className="DAT_Header-MessageDropdown-Item">
                    <div className="DAT_Header-MessageDropdown-Item-Icon1">
                      <img
                        className="dropdown-notifications-item-img"
                        src="img/profile-2.png"
                      ></img>
                    </div>
                    <div className="DAT_Header-MessageDropdown-Item-Title">
                      <div
                        className="small text-gray-500"
                        style={{ fontSize: "14.4px", color: "#212832" }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                      Thomas Wilcox · 58m
                    </div>
                  </a>
                  {/* Item2 */}
                  <a href="#" className="DAT_Header-MessageDropdown-Item">
                    <div
                      className="DAT_Header-MessageDropdown-Item-Icon2"
                      id="I1"
                    >
                      <img
                        className="dropdown-notifications-item-img"
                        src="img/profile-3.png"
                      ></img>
                    </div>
                    <div className="DAT_Header-MessageDropdown-Item-Title">
                      <div
                        className="small text-gray-500"
                        style={{ fontSize: "14.4px", color: "#212832" }}
                      >
                        {/* Sua  */}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                      {/* Sua  */}Emily Fowler · 2d
                    </div>
                  </a>
                  {/* Item3  */}
                  <a href="#" className="DAT_Header-MessageDropdown-Item">
                    <div
                      className="DAT_Header-MessageDropdown-Item-Icon3"
                      id="I1"
                    >
                      <img
                        className="dropdown-notifications-item-img"
                        src="img/profile-4.png"
                      ></img>
                    </div>
                    <div className="DAT_Header-MessageDropdown-Item-Title">
                      <div
                        className="small text-gray-500"
                        style={{ fontSize: "14.4px", color: "#212832" }}
                      >
                        {/* Sua  */}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                      {/* Sua  */}Colby Newton · 3d
                    </div>
                  </a>
                  {/* Item4  */}
                  <a href="#" className="DAT_Header-MessageDropdown-Item">
                    <div
                      className="DAT_Header-MessageDropdown-Item-Icon4"
                      id="I1"
                    >
                      <img
                        className="dropdown-notifications-item-img"
                        src="img/profile-5.png"
                      ></img>
                    </div>
                    <div className="DAT_Header-MessageDropdown-Item-Title">
                      <div
                        className="small text-gray-500"
                        style={{ fontSize: "14.4px", color: "#212832" }}
                      >
                        {/* Sua  */}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </div>
                      {/* Sua  */}Marshall Rosencrantz · 3d
                    </div>
                  </a>
                  {/* ViewAll  */}
                  <a href="#" className="DAT_Header-MessageDropdown-ViewAll">
                    View All Alert
                  </a>
                </div>
              </>
            );
          case "Users":
            return (
              <>
                {/* Users  */}
                <div
                  className="DAT_Header-UserDropdown"
                  id="Users_Drop"
                >
                  <h6>
                    <img
                      className="dropdown-notifications-item-img"
                      src="img/profile-1.png"
                    ></img>
                    <div className="DAT_Header-UserDropdown-Info">
                      <div className="DAT_Header-UserDropdown-Info-Name">
                        {info}
                      </div>
                      <div className="DAT_Header-UserDropdown-Info-Mail">
                        {mail}
                      </div>
                    </div>
                  </h6>
                  <div className="DAT_Header-UserDropdown-Divide"></div>
                  <a href="#" className="DAT_Header-UserDropdown-Account">
                    <div className="DAT_Header-UserDropdown-Account-Icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.95"
                        height="12.95"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-settings"
                        color="rgb(128, 128, 128, 0.5 )"
                      >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </svg>
                    </div>
                    Account
                  </a>
                  <a href="#" className="DAT_Header-UserDropdown-Logout">
                    <div className="DAT_Header-UserDropdown-Logout-Icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.95"
                        height="12.95"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-log-out"
                        color="rgb(128, 128, 128, 0.5 )"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                    </div>
                    Log Out
                  </a>
                </div>
              </>
            );
          default:
            <></>;
        }
      })()}

      {/* asddasas */}
    </div>
  );
}
