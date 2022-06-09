import React from "react";
import { GAME_ICON, PROJECT_WEB_ICON } from "../../../DB";

import cl from "../Projects/projects.module.scss";

const Aducat = () => {
  return (
    <div className={cl.cont__wrap}>
      <div className={cl.content1}>
        <div className={cl.content2}>
          <h3> Тад. Государственный политехнический институт</h3>
          <p>Энергетический Факультет</p>
        </div>
        <div className={cl.content2}>
          <h3>Курс HTML, CSS3</h3>
        </div>
        <div className={cl.content2}>
          <h3>Курс REACT, REDUX</h3>
        </div>
      </div>
    </div>
  );
};

export default Aducat;
