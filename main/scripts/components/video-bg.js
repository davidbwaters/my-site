///* ====================================================
//   #VIDEO-BG
//   ==================================================== */

import { html, render } from 'lighterhtml'

customElements
  .define('dbw-video-bg', class extends HTMLElement {

    constructor() {

      super()

      this.render = render.bind(
        null,
        this,
        this.render.bind(this)
      )

    }

    connectedCallback() {

      this.render()

    }

    render() {

      this.state = {
        mp4: this.getAttribute('mp4'),
        webm: this.getAttribute('webm')
      }
      if (this.hasAttribute('opaque')) {
        this.style.opacity = '.6'
      }
      this.classList.add('c-video-bg')

      return html`
        <video autoplay muted loop class="c-video-bg__video">
          <source
            src="${this.state.mp4}" 
            type="video/mp4"
          >
          <source
            src="${this.state.webm}" 
            type="video/webm"
          >
        </video>
        `

    }

  })

