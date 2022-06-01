import React, { FC } from "react";
import { ABOUT_ICON } from "../../DB";
import { IMenu } from "../../Types/types";

import cl from "./menu.module.scss";

interface MenuProps {
  menuBar: IMenu[];
}

const Menu: FC<MenuProps> = ({ menuBar }) => {
  return (
    <div className={cl.menu}>
      <div className={cl.menu_content}>
        {menuBar.map((item) => {
          return (
            <div className={cl.menu_icon}>
              <a href="/" className={cl.menu_link}>
                <div className={cl.icon}>{item.icon}</div>
                <div className={cl.title}>{item.title}</div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
