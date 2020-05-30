///* ====================================================
//   #VIDEO-BG
//   ==================================================== */

customElements
  .define('dbw-video-bg', class extends HTMLElement {

    connectedCallback() {

      this.state = {}
      this.render()

    }

    render() {

      const video = this.querySelector('video')

      this.classList.add('c-video-bg')      

      if (this.hasAttribute('mp4')) {
        this.state.mp4 = this.getAttribute('mp4')
      }

      if (this.hasAttribute('webm')) {
        this.state.mp4 = this.getAttribute('webm')
      }

      if (this.hasAttribute('opaque')) {
        this.style.opacity = '.5'
      }
      
      if (this.hasAttribute('blur')) {
        video.style.filter = 'blur(3px)'
      }

      this.state.noise = this.hasAttribute('noise')
        ? '' 
        : 'style="visibility: hidden"'

      this.innerHTML = `
        <video 
          autoplay 
          muted 
          loop 
          class="c-video-bg__video"
          ${this.state.blur}
        >
          <source
            src="${this.state.mp4}" 
            type="video/mp4"
          >
          <source
            src="${this.state.webm}" 
            type="video/webm"
          >
        </video>
        <svg
          ${this.state.noise}
          height="100%"
          width="100%"
          style="
            mix-blend-mode: difference;
            opacity: .2;
            position: relative;
          "
        >
          <filter 
            id='noise'
            x='0%' 
            y='0%' 
            width='100%' 
            height='100%'
          >
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.8"
              numOctaves="0.1"
            />
          </filter>
          <rect 
            filter="url(#noise)"
            width='100%' 
            height='100%'
          />
        </svg>
      `

    }

  })

