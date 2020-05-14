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
        video: this.getAttribute('source'),
        type: this.getAttribute('type')
      }
      if (this.hasAttribute('opaque')) {
        this.style.opacity = '.2'
      }
      this.classList.add('c-video-bg')

      return html`
        <video autoplay loop class="c-video-bg__video">
          <source 
            src="${this.state.video}" 
            type="${this.state.type}"
          >
        </video>
        `

    }

    handleEvent(event) {

      this[`on${event.type} `](event)

    }

  })

