import Content from "./component/content/Content";
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";
import Datgroup from "./component/datgroup/Datgroup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";


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

function App() {

  const [info,setInfo] = useState("unknow");
  const [mail,setMail] = useState("unknow@gmail.com");

  useEffect(()=>{
    var newdata = data;
    newdata = newdata.filter(newdata => newdata.id==2)
    console.log(data,newdata)
    setInfo(newdata[0].name)
    setMail(newdata[0].mail)
  },[])//dependencies


  return (
    <Router>
      <div className="DAT_Container">
        <Header name={info} mail={mail} />
        <div className="DAT_Container-Main">
          <Sidebar name={info} mail={mail}></Sidebar>

          <Routes>
            <Route exact path="/" element={<Content></Content>} />
            <Route path="/Datgroup" element={<Datgroup></Datgroup>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
