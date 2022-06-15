import React, { FC } from "react";
import { ABOUT_ICON } from "../../DB";
import { IMenu } from "../../Types/types";

import cl from "./menu.module.scss";
import cx from "classnames";

interface MenuProps {
  menuBar: IMenu[];
  handleClick: (i: number) => void;
  num?: number;
}

const Menu: FC<MenuProps> = ({ menuBar, handleClick, num }) => {
  return (
    <div className={cl.menu}>
      <div className={cl.menu_content}>
        {menuBar.map((item, i) => {
          return (
            <div
              onClick={() => handleClick(i)}
              key={i}
              className={cx(cl.menu_icon, { [cl.active]: num === i })}
            >
              <a href={`#${String(i)}`} className={cl.menu_link}>
                <div className={cx(cl.icon)}>{item.icon}</div>
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
