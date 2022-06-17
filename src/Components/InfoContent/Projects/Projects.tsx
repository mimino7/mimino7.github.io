import React from "react";
import { GAME_ICON, PROJECT_WEB_ICON } from "../../../DB";

import cl from "./projects.module.scss";

const Projects = () => (
  <div className={cl.cont__wrap}>
    <div className={cl.content1}>
      <div className={cl.content2}>
        {PROJECT_WEB_ICON}
        <h3>WEB Приложения:</h3>
        <h4>1. Monitoring Finance Tools</h4>
        <p>
          <a href="https://mimino7.github.io/Monitoring_FinTools">
            Cсылка на сайт
          </a>{" "}
          <br />
          <a href="https://github.com/mimino7/Monitoring_FinTools">
            Cсылка на GitHub
          </a>{" "}
          <br />
        </p>
        <h4>2. Users List</h4>
        <p>
          <a href="https://mimino7.github.io/ROOX_TEST_userList/">
            Cсылка на сайт
          </a>{" "}
          <br />
          <a href="https://github.com/mimino7/ROOX_TEST_userList">
            Cсылка на GitHub
          </a>{" "}
          <br />
        </p>
      </div>
    </div>
    <div className={cl.content1}>
      <div className={cl.content2}>
        {GAME_ICON}
        <h3>WEB Игры:</h3>
        <h4>1. Sudoku</h4>
        <p>
          <a href="https://mimino7.github.io/ROOX_TEST_userList/">
            Cсылка на сайт
          </a>{" "}
          <br />
          <a href="https://github.com/mimino7/ROOX_TEST_userList">
            Cсылка на GitHub
          </a>{" "}
          <br />
        </p>
      </div>
    </div>
  </div>
);

export default Projects;
