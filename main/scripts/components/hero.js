///* ====================================================
//   #HERO
//   ==================================================== */

customElements
  .define('dbw-hero', class extends HTMLElement {

    connectedCallback() {

      this.render()

    }

    render() {

      const inner = document.createElement('div')
      inner.innerHTML = this.state.content
      this.appendChild(inner)

    }

  })
