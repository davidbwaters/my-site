import { html, render } from 'lighterhtml'

customElements
  .define('dbw-header', class extends HTMLElement {

    constructor() {

      super()

      // Render to node or its shadow root (even closed)
      this.render = render.bind(
        null,
        // used as target node
        // it could either be the node itself
        // or its shadow root, even a closed one
        this,
        // the update callback
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
          .map(item => {

            return item.split(': ')

          })

      }

      this.classList.add('c-header')

      return html`
      
        <div class="c-header__inner">
          
          <img 
            class="c-header__logo" 
            src=${this.state.logo}
          >

          <nav class="c-header__nav">
            ${this.state.items.map(item => {

               return html`
                <a href=${item[1]}>${item[0]}</a>`
              }

            )}

          </nav>
        </div> 
        `

    }

    handleEvent(event) {

      this[`on${event.type} `](event)

    }

})

