///* ====================================================
//   #HERO
//   ==================================================== */

customElements
  .define('dbw-hero', class extends HTMLElement {

    connectedCallback() {

      this.render()

    }

    render() {

      
      const inner = this.querySelector('.inner')

      this.classList.add('c-hero')
      
      if (inner) {
        const innerDiv = document.createElement('div')

        innerDiv.classList.add('c-hero__inner')
        innerDiv.appendChild(inner)

        this.appendChild(innerDiv)
      }
      
    }

    
  })
