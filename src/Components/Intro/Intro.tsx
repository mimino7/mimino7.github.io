import React, { FC } from "react";

import logo from "../../img/888.jpg";

import cl from "./intro.module.scss";

interface IntroProps {
  name: string;
  prof: string;
  social: any[];
}

const Intro: FC<IntroProps> = ({ name, prof, social }) => {
  return (
    <div className={cl.wrap}>
      <img src={logo} alt="888.png" />
      <div className={cl.intro}>
        <div className={cl.intro_name}>{name}</div>
        <div className={cl.intro_prof}>{prof}</div>
        <div className={cl.intro_social}>
          {social.map((item, i) => (
            <span key={i}>
              <a className={cl.icon_cont} href={item.href}>
                {item.icon}
              </a>
            </span>
          ))}
        </div>
        <div className={cl.intro_link}>
          <a className={cl.link} href="CV-Mikhail.pdf">
            Скачать резюме
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
