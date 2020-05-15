///* ====================================================
//   #HERO
//   ==================================================== */

import { html, render } from 'lighterhtml'

customElements
  .define('dbw-hero', class extends HTMLElement {

    connectedCallback() {

      this.state = {
        content: this.innerHTML
      }

      this.render()

    }

    render() {

      this.classList.add('c-hero')

      if (this.hasAttribute('sauce')) {

        this.innerHTML = 
          '<span class="c-hero__text-bg">SAUCE</span>'

      }

      const inner = document.createElement('div')
      inner.innerHTML = this.state.content
      this.appendChild(inner)


    }

    handleEvent(event) {

      this[`on${event.type} `](event)

    }

  })
