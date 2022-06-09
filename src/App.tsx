import React from "react";
import Intro from "./Components/Intro/Intro";
import "./App.css";
import { infoBar, menuBar, NAME_RESUME, PROF_RESUME, social } from "./DB";
import Menu from "./Components/Menu/Menu";
import Inform from "./Components/Inform/Inform";

function App() {
  return (
    <div className="App">
      <div className="cont__wrap">
        <div className="content">
          <Menu menuBar={menuBar} />
          <Intro name={NAME_RESUME} prof={PROF_RESUME} social={social} />
          <Inform infoBar={infoBar} />
        </div>
      </div>
    </div>
  );
}

export default App;
