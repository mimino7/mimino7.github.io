import React from "react";
import Intro from "./Components/Intro/Intro";
import "./App.css";
import { NAME_INTRO, PROF_INTRO, social } from "./DB";

function App() {
  return (
    <div className="App">
      <div className="cont__wrap">
        <div className="content">
          <div className="menu" style={{width: 90}}>
            <div className="menu_content">
              <div className="menu_icon">rrr</div>
              <div className="menu_icon">rrr</div>
              <div className="menu_icon">rrr</div>
              <div className="menu_icon">rrr</div>
            </div>
          </div>
          <Intro name={NAME_INTRO} prof={PROF_INTRO} social={social}/>
          <div className="info" style={{width: 470}}>info</div>
        </div>
      </div>
    </div>
  );
}

export default App;
