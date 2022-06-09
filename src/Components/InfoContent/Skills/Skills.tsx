import React from "react";
import { ADD_ICON, ADOBE_ICON, FRONTEND_ICON } from "../../../DB";

import cl from "./skills.module.scss";

const Skills = () => {
  return (
    <div className={cl.cont__wrap}>
      <div className={cl.content1}>
        <div className={cl.content2}>
          {FRONTEND_ICON}
          <h3>Front-End Разработка</h3>
          <p>
            HTML5 <br /> CSS3 <br /> Java Script <br />
            React <br /> React-Redux TypeScript
          </p>
        </div>
      </div>
      <div className={cl.content1}>
        <div className={cl.content2}>
          {ADOBE_ICON}
          <h3>Графика</h3>
          <p>
            Adobe <br /> Photoshop <br /> Adobe Premiere
          </p>
        </div>
        <div className={cl.content2}>
          {ADD_ICON}
          <h3>Дополнительно</h3>
          <p>
            GIT <br /> GitHub <br /> English
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
