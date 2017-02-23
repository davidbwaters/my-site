//
// Headroom.js Header
//

function header(selector) {
  const headerEl = document.querySelector(selector);

  const headroom  = new Headroom(headerEl, {
    classes : {
      // when element is initialised
      initial : 'is-initial',
      // when scrolling up
      pinned : 'is-pinned',
      // when scrolling down
      unpinned : 'is-unpinned',
      // when above offset
      top : 'is-on-top',
      // when below offset
      notTop : 'is-not-on-top',
      // when at bottom of scoll area
      bottom : 'is-on-bottom',
      // when not at bottom of scroll area
      notBottom : 'is-not-on-bottom'
    }
  });

  headroom.init();
}