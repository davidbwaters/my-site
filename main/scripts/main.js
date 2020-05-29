///* ====================================================
//   #WEBPACK-PARTIALS - MAIN
//   ==================================================== */

import { html } from 'lighterhtml'
import './components/header'
import './components/hero'
import './components/video-bg'
import '../stylesheets/main.scss'

import logo from '../images/logo-white.png'
import growthMp4 from '../videos/growth.mp4'
import growthWebm from '../videos/growth.webm'

document.body.appendChild(
  html.node`
    <dbw-header logo="${logo}" items="Contact: /about">
    </dbw-header>
    <dbw-hero sauce>

      <h1 class="inner">
        I create digital solutions to promote growth.
      </h2>
      <dbw-video-bg mp4=${growthMp4} webm=${growthWebm}>
      </dbw-video-bg>
    </dbw-hero>
  `
)
