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



      this.state = {
        logo: this.getAttribute('logo'),
        items: this.getAttribute('items')
          .replace(/ /g, '')
          .replace(/\n/g, '')
          .split(',')
          .map((item) => {

            return item
              .replace(':', ',')
              .replace(/\'/g, '')
              .split(',')
          })
      }

      this.render()      

    }

    render() {

      console.log(this.state.items)
      this.classList.add('c-header')

      return html`

        <img
          class="c-header__logo"
          src=${this.state.logo}
        />
        ${this.innerText}
        <nav class="c-header__nav">
          ${
              this.state.items.map((item) => {
              
              return html`
                <a
                  class="c-header__link"
                  href=${item[1]}
                  >${item[0]}
                </a>
              `
            })
          }
        </nav>
      `

    }

  }
)
