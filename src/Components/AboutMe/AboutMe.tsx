import React from 'react'
import { EMAIL_RESUME, NAME_RESUME, PHONE_RESUME, TEXT_ABOUTME } from '../../DB'

import cl from "./aboutMe.module.scss"

const AboutMe = () => {
  return (
    <div className={cl.cont__wrap}>
    <div className={cl.content1}>
        <span>Имя</span>
        {NAME_RESUME} 
      </div>
      <div className={cl.content1}>
        <span>Email</span>
        <p>{EMAIL_RESUME}</p>
      </div>
      <div className={cl.content1}>
        <span>Телефон</span>
        {PHONE_RESUME}
      </div>
      
      <div className={cl.content2}>{TEXT_ABOUTME}</div>
    </div>

  )
}

export default AboutMe