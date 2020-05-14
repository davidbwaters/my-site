///* ====================================================
//   #HERO
//   ==================================================== */

customElements
  .define('dbw-hero', class extends HTMLElement {

    connectedCallback() {

      this.content = this.innerHTML
      this.render()

    }

    render() {

      this.classList.add('c-hero')

      if (this.hasAttribute('sauce')) {

        this.classList.add('c-hero--sauce')

      }

      const inner = document.createElement('div')

      inner.classList.add('c-hero__inner')
      inner.innerHTML = this.content
      this.innerHTML = ''
      this.appendChild(inner)

    }

    handleEvent(event) {

      this[`on${event.type} `](event)

    }

  })
