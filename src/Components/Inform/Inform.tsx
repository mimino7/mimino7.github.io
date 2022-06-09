import React, { FC } from "react";
import {
  EMAIL_RESUME,
  NAME_RESUME,
  PHONE_RESUME,
  TEXT_ABOUTME,
} from "../../DB";
import { Iinfobar } from "../../Types/types";

import cx from "classnames";
import cl from "./inform.module.scss";

interface InformProps {
  infoBar: Iinfobar[];
}

const Inform: FC<InformProps> = ({ infoBar }) => {
  return (
    <>
      {infoBar.map((cont, i) => {
        var k = 0;
        return (
          <div key={i} className={cx(cl.inf_wrap, { [cl.active]: k === i })}>
            <div className={cl.inf_content}>
              <div className={cl.title}>
                <h2>{cont.title}</h2>
              </div>
              {cont.content}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Inform;
