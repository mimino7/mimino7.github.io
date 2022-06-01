import React from "react";
import Intro from "./Components/Intro/Intro";
import "./App.css";
import { menuBar, NAME_INTRO, PROF_INTRO, social } from "./DB";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <div className="cont__wrap">
        <div className="content">
          <Menu menuBar={menuBar} />
          <Intro name={NAME_INTRO} prof={PROF_INTRO} social={social}/>
          <div className="info" style={{width: 470}}>info</div>
        </div>
      </div>
    </div>
  );
}

export default App;
