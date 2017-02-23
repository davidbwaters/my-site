//
// AnimeJS Animations
//



const heroBgAnimate = document.querySelector('.js-bg-hero').style;



function heroBg(heroSelector) {

  const colors = {
    'color-rust': '#F44D63',
    'color-pink': '#FD5EA7',
    'color-indigo': '#241E7E',
    'color-purple': '#9152EA',
    'color-royal': '#362BBB',


    // Light
    'color-rust-light': '#FD8BB2',
    'color-pink-light': '#FFA9ED',
    'color-indigo-light': '#4136E3',
    'color-purple-light': '#E994FB',
    'color-royal-light': '#614DF1',


    // Dark
    'color-rust-dark': '#F03442',
    'color-pink-dark': '#FC3F8A',
    'color-indigo-dark': '#181454',
    'color-purple-dark': '#6D37E3',
    'color-royal-dark': '#241DA5'
  }

  anime({
    targets: [heroSelector],
    //backgroundPosition: [0,'100%'],
    backgroundColor: [colors['color-pink'], colors['color-royal']],
    duration: 6000,
    loop: true,
    easing: 'linear',
    direction: 'alternate',
    delay: 1000
  })

}
