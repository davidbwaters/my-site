//
// ScrollMagic Animations
//

function scrollAnimations() {
  const controller = new ScrollMagic.Controller();

  //const sceneHero = new ScrollMagic.Scene({
  //  offset: -100,
  //  triggerElement: ".js-scroll-trigger-hero"
  //})
  //.setClassToggle(".js-scroll-target-hero", "is-active")
  //.addTo(controller);

  const sceneAbout = new ScrollMagic.Scene({
    offset: 100,
    triggerElement: '.js-scroll-trigger-about',
    reverse: false
  })
  .setClassToggle('.js-scroll-target-about', 'is-active')
  .addTo(controller);

  const sceneServices = new ScrollMagic.Scene({
    offset: 100,
    triggerElement: '.js-scroll-trigger-services',
    reverse: false
  })
  .setClassToggle('.js-scroll-target-services', 'is-active')
  .addTo(controller);


  const sceneContact = new ScrollMagic.Scene({
    offset: 0,
    triggerElement: '.js-scroll-trigger-contact',
    reverse: false
  })
  .setClassToggle('.js-scroll-target-contact', 'is-active')
  .addTo(controller);

  const sceneNavbarFilled = new ScrollMagic.Scene({
    offset: 200,
    triggerElement: '.js-scroll-trigger-about'
  })
  .setClassToggle('.js-navbar', 'c-navbar--bg-filled')
  .addTo(controller);

}