///* ====================================================
//   #HEADER
//   ==================================================== */

import { html, render } from 'lighterhtml'

customElements.define(
  'dbw-header',
  class extends HTMLElement {

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
        logo: this.getAttribute('logo'),
        items: this.getAttribute('items')
          .split(', ')
          .map((item) => {

            return item.split(': ')

          })
      }

      this.classList.add('c-header')

      return html`
        <div class="c-header__inner">
          <img
            class="c-header__logo"
            src=${this.state.logo}
          />

          <nav class="c-header__nav">
            ${this.state.items.map((item) => {

              return html` 
                <a
                  class="c-header__link"
                  href=${item[1]}
                  >${item[0]}
                </a>`
            })}
          </nav>
        </div>
      `

    }

    handleEvent(event) {

      this[`on${event.type} `](event)

    }

  }
)
