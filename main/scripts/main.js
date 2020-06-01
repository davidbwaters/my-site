///* ====================================================
//   #WEBPACK-PARTIALS - MAIN
//   ==================================================== */

import { html } from 'lighterhtml'
import './components/header'
import './components/hero'
import './components/video-bg'
import 'Stylesheets/main.scss'

import logo from 'Images/logo-white.png'
import squigle from 'Images/squigle-white.svg'

// import growthMp4 from 'Videos/growth.mp4'
// import growthWebm from 'Videos/growth.webm'

import(
  /* 
    webpackPrefetch: true,
    webpackChunkName: 'growth'
  */ 
   'Videos/growth.mp4'
)

document.body.appendChild(
  html.node`
    <dbw-header 
      logo="${logo}"
      items="
        Dribbble: 'https://dribbble.com/dbwatersdesigns',
        Github: 'https://github.com/davidbwaters',
        Mail: 'mailto:mrdavidbwaters@gmail.com',
      "
    >
    </dbw-header>
    <dbw-hero sauce>

      <div class="inner">
        <h1>
          I create digital solutions to promote growth.
        </h1>
        <img src="${squigle}" width="68px" height="7px"/>
        <br/>
        <h2 class="u-h4">
          My name is David B. Waters.
        </h2>
      </div>
      <dbw-video-bg noise blur mp4='videos/growth.mp4'>
      </dbw-video-bg>
    </dbw-hero>
  `
)
