///* ====================================================
//   #WEBPACK-PARTIALS - MAIN
//   ==================================================== */

import { html } from 'lighterhtml'
import './components/header'
import './components/hero'
import './components/video-bg'
import '../stylesheets/main.scss'

import logo from '../images/logo-white.png'
import squigle from '../images/squigle-white.svg'

import growthMp4 from '../videos/growth.mp4'
import growthWebm from '../videos/growth.webm'

console.log(logo)
console.log(growthMp4)
document.body.innerHTML = `
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
        Hi, I am David B. Waters. I design things and 
        leverage modern technology to build them. 
        Let's collaborate.
      </h2>
    </div>

    <dbw-video-bg noise blur>
      <video>
        <source src="${growthMp4}" type="video/mp4"/>
        <source src="${growthWebm}" type="video/webm"/>
      </video>
    </dbw-video-bg>
    
  </dbw-hero>
`