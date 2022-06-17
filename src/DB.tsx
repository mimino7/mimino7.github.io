import AboutMe from "./Components/InfoContent/AboutMe/AboutMe";
import Aducat from "./Components/InfoContent/Educat/Aducat";
import Insp from "./Components/InfoContent/Insp/Insp";
import Projects from "./Components/InfoContent/Projects/Projects";
import Skills from "./Components/InfoContent/Skills/Skills";

export const NAME_RESUME = "Новаев Михаил";
export const PROF_RESUME = "Frontend Developer";
export const EMAIL_RESUME = "mimino7@mail.ru";
export const PHONE_RESUME = "+7 920 889 10 10";

export const TITLE1_MENUBAR = "Обо мне";
export const TITLE2_MENUBAR = "Навыки";
export const TITLE3_MENUBAR = "Проекты";
export const TITLE4_MENUBAR = "Образование";
export const TITLE5_MENUBAR = "Опыт";

export const TEXT_ABOUTME = (
  <>
    <p> Привет!</p>
    <p> Я web-разработчик.</p>
    <p>
      Рассматриваю предложения на позицию  Junior REACT-разработчика. <br />{" "}
      Проживаю в городе Калуга.
    </p>
    <p>Полная занятость, частичная занятость,   проектная работа.</p>
    <p>Удаленная работа.</p>
    <p>График работы: полный день.</p>
  </>
);

export const infoBar = [
  { title: TITLE1_MENUBAR, content: <AboutMe /> },
  { title: TITLE2_MENUBAR, content: <Skills /> },
  { title: TITLE3_MENUBAR, content: <Projects /> },
  { title: TITLE4_MENUBAR, content: <Aducat /> },
  { title: TITLE5_MENUBAR, content: <Insp /> },
];

export const PHONE_ICON = (
  <svg width="20" height="20" viewBox="0 0 18 18" className="icon">
    <path
      d="M3.6,7.8 C5,10.6 7.4,12.9 10.2,14.4 L12.4,12.2 C12.7,11.9 13.1,11.8 13.4,12 C14.5,12.4 15.7,12.6 17,12.6 C17.6,12.6 18,13 18,13.6 L18,17 C18,17.6 17.6,18 17,18 C7.6,18 0,10.4 0,1 C0,0.4 0.4,0 1,0 L4.5,0 C5.1,0 5.5,0.4 5.5,1 C5.5,2.2 5.7,3.4 6.1,4.6 C6.2,4.9 6.1,5.3 5.9,5.6 L3.6,7.8 L3.6,7.8 Z"
      id="Shape"
    ></path>
  </svg>
);
export const EMAIL_ICON = (
  <svg width="22" height="22" viewBox="0 0 18 18" className="icon">
    <path d="M 18 7.132812 L 18 15.105469 C 18 15.550781 17.84375 15.925781 17.527344 16.242188 C 17.214844 16.558594 16.835938 16.714844 16.394531 16.714844 L 1.605469 16.714844 C 1.164062 16.714844 0.785156 16.558594 0.472656 16.242188 C 0.15625 15.925781 0 15.550781 0 15.105469 L 0 7.132812 C 0.292969 7.460938 0.632812 7.75 1.015625 8.003906 C 3.4375 9.652344 5.101562 10.808594 6.007812 11.472656 C 6.386719 11.753906 6.699219 11.972656 6.9375 12.128906 C 7.171875 12.285156 7.488281 12.445312 7.886719 12.609375 C 8.28125 12.773438 8.648438 12.855469 8.988281 12.855469 L 9.011719 12.855469 C 9.351562 12.855469 9.71875 12.773438 10.113281 12.609375 C 10.511719 12.445312 10.828125 12.285156 11.0625 12.128906 C 11.300781 11.972656 11.613281 11.753906 11.992188 11.472656 C 13.132812 10.648438 14.800781 9.492188 16.996094 8.003906 C 17.378906 7.746094 17.710938 7.453125 18 7.132812 Z M 18 4.179688 C 18 4.707031 17.835938 5.214844 17.507812 5.695312 C 17.179688 6.175781 16.769531 6.589844 16.28125 6.929688 C 13.765625 8.679688 12.199219 9.765625 11.582031 10.195312 C 11.515625 10.242188 11.371094 10.34375 11.15625 10.5 C 10.9375 10.660156 10.757812 10.785156 10.613281 10.882812 C 10.46875 10.980469 10.292969 11.089844 10.089844 11.210938 C 9.886719 11.332031 9.691406 11.421875 9.511719 11.480469 C 9.332031 11.542969 9.164062 11.570312 9.011719 11.570312 L 8.988281 11.570312 C 8.835938 11.570312 8.667969 11.542969 8.488281 11.480469 C 8.308594 11.421875 8.113281 11.332031 7.910156 11.210938 C 7.707031 11.089844 7.53125 10.980469 7.386719 10.882812 C 7.242188 10.785156 7.0625 10.660156 6.84375 10.5 C 6.628906 10.34375 6.484375 10.242188 6.417969 10.195312 C 5.808594 9.765625 4.933594 9.15625 3.785156 8.363281 C 2.640625 7.570312 1.957031 7.089844 1.726562 6.929688 C 1.3125 6.648438 0.921875 6.261719 0.550781 5.769531 C 0.183594 5.277344 0 4.820312 0 4.398438 C 0 3.878906 0.140625 3.441406 0.417969 3.09375 C 0.695312 2.746094 1.089844 2.570312 1.605469 2.570312 L 16.394531 2.570312 C 16.828125 2.570312 17.203125 2.730469 17.523438 3.042969 C 17.839844 3.359375 18 3.738281 18 4.179688 Z M 18 4.179688 "></path>
  </svg>
);
export const GITHUB_ICON = (
  <svg width="25" height="25" viewBox="0 0 18 18" className="icon">
    <path d="M 9 0 C 4.03125 0 0 4.03125 0 9 C 0 12.976562 2.578125 16.351562 6.15625 17.539062 C 6.605469 17.621094 6.769531 17.34375 6.769531 17.105469 C 6.769531 16.890625 6.761719 16.183594 6.757812 15.429688 C 4.253906 15.976562 3.726562 14.371094 3.726562 14.371094 C 3.316406 13.332031 2.726562 13.054688 2.726562 13.054688 C 1.90625 12.496094 2.789062 12.507812 2.789062 12.507812 C 3.691406 12.570312 4.167969 13.433594 4.167969 13.433594 C 4.96875 14.808594 6.273438 14.410156 6.785156 14.179688 C 6.867188 13.601562 7.101562 13.203125 7.359375 12.980469 C 5.359375 12.75 3.257812 11.980469 3.257812 8.53125 C 3.257812 7.546875 3.609375 6.746094 4.183594 6.117188 C 4.09375 5.886719 3.78125 4.972656 4.273438 3.734375 C 4.273438 3.734375 5.027344 3.492188 6.746094 4.65625 C 7.464844 4.453125 8.234375 4.355469 9 4.351562 C 9.765625 4.355469 10.535156 4.457031 11.253906 4.65625 C 12.96875 3.492188 13.726562 3.734375 13.726562 3.734375 C 14.21875 4.972656 13.910156 5.886719 13.816406 6.117188 C 14.394531 6.746094 14.742188 7.546875 14.742188 8.53125 C 14.742188 11.988281 12.636719 12.75 10.632812 12.972656 C 10.957031 13.25 11.242188 13.796875 11.242188 14.636719 C 11.242188 15.839844 11.230469 16.8125 11.230469 17.109375 C 11.230469 17.347656 11.394531 17.628906 11.851562 17.539062 C 15.421875 16.347656 18 12.976562 18 9 C 18 4.03125 13.96875 0 9 0 Z M 9 0 "></path>
  </svg>
);

export const WATSAP_ICON = (
  <svg width="25" height="25" viewBox="0 0 18 18" className="icon">
    <path d="M 14.644531 3.382812 C 13.175781 1.914062 11.222656 1.101562 9.144531 1.101562 C 4.855469 1.101562 1.367188 4.589844 1.363281 8.878906 C 1.363281 10.25 1.722656 11.589844 2.402344 12.769531 L 1.296875 16.800781 L 5.421875 15.71875 C 6.558594 16.339844 7.839844 16.664062 9.140625 16.667969 L 9.144531 16.667969 C 13.429688 16.667969 16.921875 13.175781 16.921875 8.886719 C 16.921875 6.808594 16.113281 4.855469 14.644531 3.382812 Z M 9.144531 15.351562 L 9.140625 15.351562 C 7.980469 15.351562 6.84375 15.039062 5.851562 14.453125 L 5.613281 14.3125 L 3.167969 14.953125 L 3.820312 12.566406 L 3.664062 12.324219 C 3.019531 11.292969 2.675781 10.101562 2.675781 8.882812 C 2.679688 5.316406 5.578125 2.414062 9.144531 2.414062 C 10.871094 2.417969 12.496094 3.089844 13.71875 4.3125 C 14.9375 5.535156 15.609375 7.160156 15.609375 8.886719 C 15.609375 12.453125 12.707031 15.351562 9.144531 15.351562 Z M 9.144531 15.351562 "></path>
    <path d="M 12.691406 10.511719 C 12.496094 10.414062 11.539062 9.941406 11.363281 9.878906 C 11.183594 9.8125 11.054688 9.78125 10.925781 9.976562 C 10.792969 10.167969 10.421875 10.605469 10.308594 10.738281 C 10.195312 10.867188 10.082031 10.882812 9.886719 10.785156 C 9.695312 10.6875 9.066406 10.484375 8.324219 9.820312 C 7.746094 9.304688 7.355469 8.667969 7.242188 8.472656 C 7.128906 8.28125 7.230469 8.175781 7.328125 8.078125 C 7.414062 7.992188 7.523438 7.851562 7.621094 7.738281 C 7.71875 7.625 7.75 7.542969 7.816406 7.414062 C 7.878906 7.28125 7.847656 7.167969 7.796875 7.070312 C 7.75 6.976562 7.359375 6.019531 7.199219 5.628906 C 7.042969 5.25 6.882812 5.300781 6.761719 5.296875 C 6.648438 5.289062 6.519531 5.289062 6.390625 5.289062 C 6.257812 5.289062 6.046875 5.335938 5.871094 5.53125 C 5.691406 5.726562 5.191406 6.195312 5.191406 7.152344 C 5.191406 8.109375 5.886719 9.035156 5.984375 9.164062 C 6.082031 9.292969 7.355469 11.257812 9.304688 12.097656 C 9.769531 12.300781 10.128906 12.417969 10.414062 12.507812 C 10.878906 12.65625 11.300781 12.636719 11.636719 12.585938 C 12.011719 12.53125 12.789062 12.113281 12.949219 11.660156 C 13.109375 11.207031 13.109375 10.816406 13.0625 10.738281 C 13.015625 10.65625 12.882812 10.605469 12.691406 10.511719 Z M 12.691406 10.511719 "></path>
  </svg>
);

export const ABOUT_ICON = (
  <svg width="43" height="43" viewBox="0 0 512 512" id="_x30_1" version="1.1">
    <g>
      <ellipse cx="256" cy="130" rx="110" ry="130" />
      <path d="M36,478.191C36,390.825,134.497,320,256,320s220,70.825,220,158.191v0C476,496.863,460.863,512,442.192,512H69.808   C51.137,512,36,496.863,36,478.191L36,478.191z" />
    </g>
  </svg>
);

export const SKILS_ICON = (
  <svg data-v-fcaf556c="" width="43" height="43" viewBox="0 0 48 48">
    <g data-v-fcaf556c="">
      <path
        data-v-fcaf556c=""
        d="M 34.5 42 C 32.851562 42 31.351562 40.949219 30.75 39.300781 C 30.75 39.148438 30.75 39 30.601562 39 L 17.25 39 C 17.25 39.148438 17.25 39.300781 17.101562 39.300781 C 16.648438 40.949219 15.148438 42 13.5 42 C 12.601562 42 12 42.601562 12 43.5 C 12 44.398438 12.601562 45 13.5 45 L 34.5 45 C 35.398438 45 36 44.398438 36 43.5 C 36 42.601562 35.398438 42 34.5 42 Z M 34.5 42 "
      ></path>
      <path
        data-v-fcaf556c=""
        d="M 40.5 4.5 L 7.5 4.5 C 4.949219 4.5 3 6.449219 3 9 L 3 31.5 C 3 34.050781 4.949219 36 7.5 36 L 40.5 36 C 43.050781 36 45 34.050781 45 31.5 L 45 9 C 45 6.449219 43.050781 4.5 40.5 4.5 Z M 18 28.5 C 13.050781 28.5 9 24.449219 9 19.5 C 9 15 12.300781 11.398438 16.5 10.648438 L 16.5 19.5 C 16.5 20.398438 17.101562 21 18 21 L 26.851562 21 C 26.101562 25.199219 22.5 28.5 18 28.5 Z M 19.5 18 L 19.5 10.648438 C 23.25 11.25 26.25 14.25 26.851562 18 Z M 37.5 27 L 31.5 27 C 30.601562 27 30 26.398438 30 25.5 C 30 24.601562 30.601562 24 31.5 24 L 37.5 24 C 38.398438 24 39 24.601562 39 25.5 C 39 26.398438 38.398438 27 37.5 27 Z M 37.5 21 L 31.5 21 C 30.601562 21 30 20.398438 30 19.5 C 30 18.601562 30.601562 18 31.5 18 L 37.5 18 C 38.398438 18 39 18.601562 39 19.5 C 39 20.398438 38.398438 21 37.5 21 Z M 37.5 15 L 31.5 15 C 30.601562 15 30 14.398438 30 13.5 C 30 12.601562 30.601562 12 31.5 12 L 37.5 12 C 38.398438 12 39 12.601562 39 13.5 C 39 14.398438 38.398438 15 37.5 15 Z M 37.5 15 "
      ></path>
    </g>
  </svg>
);

export const PROJECT_ICON = (
  <svg width="43" height="43" viewBox="0 0 24 24">
    <path d="M23,9h-3V5c0-0.6-0.4-1-1-1H1C0.4,4,0,4.4,0,5v13c0,0.6,0.4,1,1,1h8v2H6c-0.6,0-1,0.4-1,1v2h18c0.6,0,1-0.4,1-1V10  C24,9.4,23.6,9,23,9z M14,23H6v-1h8V23z M14,21h-3v-2h3V21z M14,17H2v-1h12V17z M14,10v5H2V6h16v3h-3C14.4,9,14,9.4,14,10z M22,22  h-6v-1h6V22z M22,20h-6v-7h6V20z M22,12h-6v-1h6V12z"></path>
  </svg>
);

export const EDUCAT_ICON = (
  <svg width="43" height="43" viewBox="0 0 48 48">
    <path d="M 24.074219 33.851562 C 14.746094 33.851562 7.152344 26.257812 7.152344 16.929688 C 7.152344 7.59375 14.746094 0 24.074219 0 C 33.402344 0 40.996094 7.59375 40.996094 16.921875 C 40.996094 26.257812 33.402344 33.851562 24.074219 33.851562 Z M 24.074219 7.882812 C 19.085938 7.882812 15.027344 11.945312 15.027344 16.929688 C 15.027344 21.917969 19.085938 25.96875 24.074219 25.96875 C 29.0625 25.96875 33.121094 21.910156 33.121094 16.929688 C 33.121094 11.933594 29.0625 7.882812 24.074219 7.882812 Z M 24.074219 7.882812 "></path>
    <path d="M 30.609375 16.921875 C 30.609375 20.53125 27.683594 23.457031 24.074219 23.457031 C 20.464844 23.457031 17.539062 20.53125 17.539062 16.921875 C 17.539062 13.3125 20.464844 10.386719 24.074219 10.386719 C 27.683594 10.386719 30.609375 13.3125 30.609375 16.921875 Z M 30.609375 16.921875 "></path>
    <path d="M 9.113281 28.546875 L 1.566406 41.363281 L 8.632812 42.253906 L 12.835938 48 L 20.324219 35.289062 C 15.523438 34.632812 11.8125 32.34375 9.113281 28.546875 Z M 9.113281 28.546875 "></path>
    <path d="M 38.886719 28.546875 L 46.445312 41.363281 L 39.375 42.253906 L 35.175781 48 L 27.683594 35.289062 C 32.476562 34.632812 36.1875 32.34375 38.886719 28.546875 Z M 38.886719 28.546875 "></path>
  </svg>
);

export const ACHIEV_ICON = (
  <svg width="43" height="43" viewBox="0 0 48 48">
    <path d="M 24.074219 33.851562 C 14.746094 33.851562 7.152344 26.257812 7.152344 16.929688 C 7.152344 7.59375 14.746094 0 24.074219 0 C 33.402344 0 40.996094 7.59375 40.996094 16.921875 C 40.996094 26.257812 33.402344 33.851562 24.074219 33.851562 Z M 24.074219 7.882812 C 19.085938 7.882812 15.027344 11.945312 15.027344 16.929688 C 15.027344 21.917969 19.085938 25.96875 24.074219 25.96875 C 29.0625 25.96875 33.121094 21.910156 33.121094 16.929688 C 33.121094 11.933594 29.0625 7.882812 24.074219 7.882812 Z M 24.074219 7.882812 "></path>
    <path d="M 30.609375 16.921875 C 30.609375 20.53125 27.683594 23.457031 24.074219 23.457031 C 20.464844 23.457031 17.539062 20.53125 17.539062 16.921875 C 17.539062 13.3125 20.464844 10.386719 24.074219 10.386719 C 27.683594 10.386719 30.609375 13.3125 30.609375 16.921875 Z M 30.609375 16.921875 "></path>
    <path d="M 9.113281 28.546875 L 1.566406 41.363281 L 8.632812 42.253906 L 12.835938 48 L 20.324219 35.289062 C 15.523438 34.632812 11.8125 32.34375 9.113281 28.546875 Z M 9.113281 28.546875 "></path>
    <path d="M 38.886719 28.546875 L 46.445312 41.363281 L 39.375 42.253906 L 35.175781 48 L 27.683594 35.289062 C 32.476562 34.632812 36.1875 32.34375 38.886719 28.546875 Z M 38.886719 28.546875 "></path>
  </svg>
);
export const EXP_ICON = (
  <svg width="43" height="43" viewBox="0 0 48 48">
    <path d="M 43.050781 25.949219 C 38.398438 21.300781 30.75 21.300781 26.101562 25.949219 C 21.449219 30.601562 21.449219 38.25 26.101562 42.898438 C 30.75 47.550781 38.398438 47.550781 43.050781 42.898438 C 47.699219 38.25 47.699219 30.75 43.050781 25.949219 Z M 39 36 L 34.5 36 C 33.601562 36 33 35.398438 33 34.5 L 33 28.5 C 33 27.601562 33.601562 27 34.5 27 C 35.398438 27 36 27.601562 36 28.5 L 36 33 L 39 33 C 39.898438 33 40.5 33.601562 40.5 34.5 C 40.5 35.398438 39.898438 36 39 36 Z M 39 36 "></path>
    <path d="M 19.648438 36.148438 C 19.5 35.101562 19.5 33.898438 19.648438 32.851562 C 19.648438 32.398438 19.800781 31.800781 19.949219 31.351562 C 19.949219 31.199219 19.949219 31.199219 20.101562 31.050781 C 20.25 30.601562 20.25 30.300781 20.398438 29.851562 C 20.398438 29.699219 20.550781 29.550781 20.550781 29.398438 C 20.699219 29.101562 20.851562 28.648438 21 28.351562 C 21 28.199219 21.148438 28.050781 21.300781 27.898438 C 21.449219 27.601562 21.601562 27.300781 21.75 27 C 21.898438 26.851562 21.898438 26.699219 22.050781 26.550781 C 22.199219 26.25 22.5 25.949219 22.648438 25.648438 C 22.800781 25.5 22.800781 25.351562 22.949219 25.199219 C 23.25 24.75 23.699219 24.300781 24 24 C 24.300781 23.699219 24.75 23.25 25.050781 22.949219 C 25.199219 22.800781 25.351562 22.800781 25.5 22.648438 C 25.800781 22.5 25.949219 22.199219 26.25 22.050781 C 26.398438 21.898438 26.550781 21.898438 26.699219 21.75 C 27 21.601562 27.148438 21.449219 27.449219 21.300781 C 27.601562 21.148438 27.898438 21.148438 28.050781 21 C 28.199219 20.851562 28.5 20.851562 28.648438 20.699219 C 28.800781 20.550781 29.101562 20.550781 29.25 20.398438 C 29.398438 20.25 29.699219 20.25 29.851562 20.25 C 30.148438 20.101562 30.300781 20.101562 30.601562 20.101562 C 30.75 20.101562 31.050781 19.949219 31.199219 19.949219 C 31.5 19.949219 31.800781 19.800781 31.949219 19.800781 C 32.101562 19.800781 32.25 19.800781 32.398438 19.800781 C 32.699219 19.800781 33 19.648438 33.300781 19.648438 C 33.449219 19.648438 33.601562 19.648438 33.601562 19.648438 C 33.898438 19.648438 34.351562 19.648438 34.648438 19.648438 C 34.648438 19.648438 34.800781 19.648438 34.800781 19.648438 C 37.800781 19.800781 40.800781 20.699219 43.351562 22.648438 L 43.351562 13.5 C 43.351562 9.300781 40.050781 6 35.851562 6 L 12 6 C 7.800781 6 4.5 9.300781 4.5 13.5 L 4.5 42 C 4.5 42.601562 4.800781 43.050781 5.398438 43.351562 C 5.550781 43.5 5.851562 43.5 6 43.5 C 6.300781 43.5 6.75 43.351562 7.050781 43.199219 C 10.648438 39.898438 15 37.648438 19.648438 36.148438 Z M 16.5 16.5 L 25.5 16.5 C 26.398438 16.5 27 17.101562 27 18 C 27 18.898438 26.398438 19.5 25.5 19.5 L 16.5 19.5 C 15.601562 19.5 15 18.898438 15 18 C 15 17.101562 15.601562 16.5 16.5 16.5 Z M 15 24 C 15 23.101562 15.601562 22.5 16.5 22.5 L 21 22.5 C 21.898438 22.5 22.5 23.101562 22.5 24 C 22.5 24.898438 21.898438 25.5 21 25.5 L 16.5 25.5 C 15.601562 25.5 15 24.898438 15 24 Z M 15 24 "></path>
  </svg>
);
export const FRONTEND_ICON = (
  <svg
    width="70"
    height="70"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    className="icon-skills"
  >
    <g>
      <path
        d="M28,24H4a3,3,0,0,1-3-3V5A3,3,0,0,1,4,2H28a3,3,0,0,1,3,3V21A3,3,0,0,1,28,24ZM4,4A1,1,0,0,0,3,5V21a1,1,0,0,0,1,1H28a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1Z"
        className="cls-1"
      ></path>
      <path
        d="M21,30H11a1,1,0,0,1-1-1.16l1-6A1,1,0,0,1,12,22h8a1,1,0,0,1,1,.84l1,6A1,1,0,0,1,21,30Zm-8.82-2h7.64l-.67-4h-6.3Z"
        className="cls-1"
      ></path>
      <path
        d="M24,30H8a1,1,0,0,1,0-2H24a1,1,0,0,1,0,2Z"
        className="cls-1"
      ></path>
      <path
        d="M30,19H2a1,1,0,0,1,0-2H30a1,1,0,0,1,0,2Z"
        className="cls-1"
      ></path>
    </g>
  </svg>
);
export const ADOBE_ICON = (
  <svg
    width="70"
    height="70"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className="icon-skills"
  >
    <g>
      <path d="M40,40V2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2V40a2,2,0,0,0,2,2H38A2,2,0,0,0,40,40ZM2,2H38V27.59l-6.29-6.29a1,1,0,0,0-1.41,0L24,27.59l-7.21-7.21a1,1,0,0,0-1.41,0L2,33.74ZM2,40V36.57L16.08,22.49,33.59,40ZM25.41,29,31,23.41l7,7V40H36.41Z"></path>
      <path d="M46,6H42V8h4V46H10V44H8v2a2,2,0,0,0,2,2H46a2,2,0,0,0,2-2V8A2,2,0,0,0,46,6Z"></path>
      <path d="M22,18a6,6,0,1,0-6-6A6,6,0,0,0,22,18ZM22,8a4,4,0,1,1-4,4A4,4,0,0,1,22,8Z"></path>
    </g>
  </svg>
);
export const ADD_ICON = (
  <svg
    width="70"
    height="70"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    className="icon-skills"
  >
    <g>
      <path d="M 0 9.601562 C 0 7.839844 1.441406 6.398438 3.199219 6.398438 L 28.800781 6.398438 C 30.566406 6.398438 32 7.832031 32 9.601562 L 32 22.398438 C 32 24.167969 30.566406 25.601562 28.800781 25.601562 L 3.199219 25.601562 C 1.433594 25.601562 0 24.167969 0 22.398438 Z M 3.199219 9.601562 L 3.199219 12.800781 L 6.398438 12.800781 L 6.398438 9.601562 Z M 4.800781 14.398438 L 4.800781 17.601562 L 8 17.601562 L 8 14.398438 Z M 3.199219 19.199219 L 3.199219 22.398438 L 6.398438 22.398438 L 6.398438 19.199219 Z M 8 19.199219 L 8 22.398438 L 24 22.398438 L 24 19.199219 Z M 25.601562 19.199219 L 25.601562 22.398438 L 28.800781 22.398438 L 28.800781 19.199219 Z M 9.601562 14.398438 L 9.601562 17.601562 L 12.800781 17.601562 L 12.800781 14.398438 Z M 14.398438 14.398438 L 14.398438 17.601562 L 17.601562 17.601562 L 17.601562 14.398438 Z M 19.199219 14.398438 L 19.199219 17.601562 L 22.398438 17.601562 L 22.398438 14.398438 Z M 24 14.398438 L 24 17.601562 L 27.199219 17.601562 L 27.199219 14.398438 Z M 8 9.601562 L 8 12.800781 L 11.199219 12.800781 L 11.199219 9.601562 Z M 12.800781 9.601562 L 12.800781 12.800781 L 16 12.800781 L 16 9.601562 Z M 17.601562 9.601562 L 17.601562 12.800781 L 20.800781 12.800781 L 20.800781 9.601562 Z M 22.398438 9.601562 L 22.398438 12.800781 L 28.800781 12.800781 L 28.800781 9.601562 Z M 22.398438 9.601562 "></path>
    </g>
  </svg>
);
export const PROJECT_WEB_ICON = (
  <svg
    width="70"
    height="70"
    viewBox="0 0 22.575 22.576"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g data-name="Layer 2" id="Layer_2">
      <g data-name="Layer 1" id="Layer_1-2">
        <path
          d="M21.321,3.192a.342.342,0,0,0,0,.684.571.571,0,0,1,.57.571V16.418h-2.28V.342A.342.342,0,0,0,19.269,0H3.306a.342.342,0,0,0-.342.342V16.418H.684V4.447a.571.571,0,0,1,.57-.571.342.342,0,0,0,0-.684A1.256,1.256,0,0,0,0,4.447V18.585a1.255,1.255,0,0,0,1.254,1.254H6.841v2.052h-2.4a.342.342,0,0,0,0,.684H18.129a.342.342,0,0,0,0-.684H15.734V19.839h5.587a1.255,1.255,0,0,0,1.254-1.254V4.447A1.256,1.256,0,0,0,21.321,3.192ZM3.648.684H18.927V3.192H3.648Zm0,3.192H18.927V7.762L16.794,9.5l-2.247-.754a.34.34,0,0,0-.337.069l-2.652,2.367L8.947,10.6a26.659,26.659,0,0,0-2.914,1.38l-2.385-.367ZM18.927,8.645v7.773H17.206V10.047ZM16.522,10.13v6.288H14.78V9.546Zm-2.426-.3v6.584H12v-4.71Zm-2.783,2v4.589h-2.1V11.361Zm-2.783-.34v4.929h-2.1V12.546Zm-4.882.817,2.1.323v3.789h-2.1Zm11.4,9.585H7.525V19.839H15.05Zm6.841-3.306a.57.57,0,0,1-.57.57H1.254a.571.571,0,0,1-.57-.57V17.1H21.891ZM13.582,1.7c.32.3-.176.8-.483.484S13.271,1.39,13.582,1.7Zm1.925.242a.342.342,0,0,1-.684,0A.342.342,0,0,1,15.507,1.94Zm1.724-.247c.316.31-.174.807-.484.489A.344.344,0,0,1,17.231,1.693ZM11.362,5.815a.342.342,0,0,1,.342-.342h2.734a.342.342,0,0,1,0,.684H11.7A.342.342,0,0,1,11.362,5.815Zm-6.117,0a.342.342,0,0,1,.342-.342H9.88a.342.342,0,0,1,0,.684H5.587A.342.342,0,0,1,5.245,5.815Zm6.8,2.281a.342.342,0,0,1-.342.342H9.426a.342.342,0,0,1,0-.684H11.7A.342.342,0,0,1,12.043,8.1ZM7.6,8.438H5.587a.342.342,0,0,1,0-.684H7.6A.342.342,0,0,1,7.6,8.438Z"
          data-name="traffic monitoring"
          id="traffic_monitoring"
        />
      </g>
    </g>
  </svg>
);
export const GAME_ICON = (
  <svg
    height="70"
    viewBox="0 0 24 24"
    width="70"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M2.55421 6.04902C1.57397 6.80648 1 7.97537 1 9.21416V17C1 18.6569 2.34315 20 4 20H4.85499C5.87969 20 6.83352 19.477 7.38447 18.613L8.95518 16.1498C9.13883 15.8618 9.45677 15.6875 9.79834 15.6875H14.2017C14.5432 15.6875 14.8612 15.8618 15.0448 16.1498L16.6155 18.613C17.1665 19.477 18.1203 20 19.145 20H20C21.6569 20 23 18.6569 23 17V9.21416C23 7.97537 22.426 6.80648 21.4458 6.04902L20.201 5.08715C18.4499 3.73405 16.2995 3 14.0865 3H9.91346C7.70051 3 5.55006 3.73405 3.79898 5.08715L2.55421 6.04902ZM6 12C6 12.5523 6.44772 13 7 13C7.55228 13 8 12.5523 8 12V11H9C9.55228 11 10 10.5523 10 10C10 9.44771 9.55228 9 9 9H8V8C8 7.44772 7.55229 7 7 7C6.44772 7 6 7.44772 6 8V9H5C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11H6V12ZM20 10C20 10.5523 19.5523 11 19 11C18.4477 11 18 10.5523 18 10C18 9.44772 18.4477 9 19 9C19.5523 9 20 9.44772 20 10ZM17 13C16.4477 13 16 12.5523 16 12C16 11.4477 16.4477 11 17 11C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13Z"
      fill="#ddbc95"
      fillRule="evenodd"
    />
  </svg>
);

export const social: any[] = [
  { icon: PHONE_ICON, href: "tel:+79208891010" },
  {
    icon: EMAIL_ICON,
    href: "https://mail.google.com/mail/u/2/#inbox?compose=CllgCJNwgHNmJkZCJdSRTzHvczBHFKQbMXVdRGPJzrzhMQjRmNsnCBNRQQmWMwJfzZtKdBwdRwg",
  },
  { icon: WATSAP_ICON, href: "https://wa.me/79208891010" },
  { icon: GITHUB_ICON, href: "https://github.com/mimino7" },
];
export const menuBar = [
  { icon: ABOUT_ICON, title: TITLE1_MENUBAR },
  { icon: SKILS_ICON, title: TITLE2_MENUBAR },
  { icon: PROJECT_ICON, title: TITLE3_MENUBAR },
  { icon: EDUCAT_ICON, title: TITLE4_MENUBAR },
  { icon: EXP_ICON, title: TITLE5_MENUBAR },
];
