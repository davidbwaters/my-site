///* ====================================================
//   #WEBPACK-PARTIALS - MAIN
//   ==================================================== */

import { html } from 'lighterhtml'
import './components/header'
import './components/hero'
import './components/video-bg'
import '../stylesheets/main.scss'

import logo from '../images/logo-black.png'
import video from '../videos/growth.webm'

document.body.appendChild(
  html.node`
    <dbw-video-bg opaque source=${video} type="video/webm">
    </dbw-video-bg>
    <dbw-hero sauce>
      <dbw-header logo="${logo}" items="About: /about">
      </dbw-header>
      <h1>
        I create digital solutions to promote growth.
      </h2>
    </dbw-hero>
  `
)
