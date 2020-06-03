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

      const video = this.querySelector('video')
      const noise = `
        <svg
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

      this.classList.add('c-video-bg')
      video.classList.add('c-video-bg__video')

      video.setAttribute('autoplay', '')
      video.setAttribute('muted', '')
      video.setAttribute('loop', '')

      if (this.hasAttribute('opaque')) {
        this.style.opacity = '.5'
      }

      if (this.hasAttribute('blur')) {
        video.style.filter = 'blur(3px)'
      }

      if (this.hasAttribute('noise')) {
        this.innerHTML += noise
      }

      if (this.hasAttribute('banner')) {
        const banner = this.getAttribute('banner')
        this.style.backgroundImage = 'url(' + banner + ')'
      }

    }

  })

