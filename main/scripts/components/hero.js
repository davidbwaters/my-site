///* ====================================================
//   #HERO
//   ==================================================== */

customElements
  .define('dbw-hero', class extends HTMLElement {

    connectedCallback() {

      this.render()

    }

    render() {

      const template = document.createElement('template')
      const inner = document.createElement('div')
      
      inner.appendChild(this.cloneNode)
      template.appendChild(inner)
      this.appendChild(template)
    
    }

  })
