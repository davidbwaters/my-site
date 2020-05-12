import { html } from 'lighterhtml'
import './stylesheets/main.scss'
import './scripts/components/header'
import logo from './images/logo-black.png'

document.body.appendChild(
  html.node`
    <dbw-header logo="${logo}" 
      items="About: /about">
    </dbw-header>
  `
)
