import React, { useState } from "react";
import Intro from "./Components/Intro/Intro";
import "./App.css";
import { infoBar, menuBar, NAME_RESUME, PROF_RESUME, social } from "./DB";
import Menu from "./Components/Menu/Menu";
import Inform from "./Components/Inform/Inform";

function App() {
  const [numMenu, setNumMenu] = useState(0);

  const handleClick = (i: number) => {
    setNumMenu(i);
  };
  console.log(numMenu);

  return (
    <div className="App">
      <div className="cont__wrap">
        <div className="content">
          <Menu handleClick={handleClick} menuBar={menuBar} num={numMenu} />
          <Intro name={NAME_RESUME} prof={PROF_RESUME} social={social} />
          <Inform infoBar={infoBar} num={numMenu} />
        </div>
      </div>
    </div>
  );
}

export default App;
