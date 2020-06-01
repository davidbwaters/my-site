///* ====================================================
//   #VIDEO-BG
//   ==================================================== */

import formfactor from 'platform-detect'

customElements
  .define('dbw-video-bg', class extends HTMLElement {

    connectedCallback() {

      this.state = {}
      this.render()

    }

    render() {

      this.classList.add('c-video-bg')      

      if (this.hasAttribute('mp4')) {
        this.state.mp4 = `
          <source 
            src=${this.getAttribute('mp4')} 
            type="video/mp4"
          >
        `
      }

      if (this.hasAttribute('mp4')) {
        this.state.mp4 = `
          <source 
            src=${this.getAttribute('mp4')} 
            type="video/webm"
          >
        `
      }

      if (this.hasAttribute('opaque')) {
        this.style.opacity = '.5'
      }
      
      this.state.noise = this.hasAttribute('noise')
        ? '' 
        : 'style="visibility: hidden"'


      if (formfactor !== 'phone' || 'tablet') {

      }

      this.innerHTML = `
        <video 
          autoplay 
          muted 
          loop 
          class="c-video-bg__video"
          ${this.state.blur}
        >

        ${this.state.mp4}
        ${this.state.webm}

        </video>
        <svg
          ${this.state.noise}
          height="100%"
          width="100%"
          style="
            mix-blend-mode: difference;
            opacity: .25;
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
              numOctaves="1"
            />
          </filter>
          <rect 
            filter="url(#noise)"
            width='100%' 
            height='100%'
          />
        </svg>
      `

      const video = this.querySelector('video')

      if (this.hasAttribute('blur')) {
        video.style.filter = 'blur(3px)'
      }
      
    }

  })

