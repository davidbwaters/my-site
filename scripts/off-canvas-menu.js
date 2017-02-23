//
// Menu Toggle
//

function ocToggle(triggerSelector) {
  const trigger = document.querySelector(triggerSelector),
        targetNavbar = document.querySelector(trigger.getAttribute('data-target')),
        target = targetNavbar.querySelector('.js-nav'),
        targetWrapper  = trigger.getAttribute('data-wrapper'),
        wrapper = (targetWrapper != null) ? document.querySelector(targetWrapper): false,
        footer = document.querySelector('.js-footer');

  let navIsOpen = false;

  function navOpen(target) {
    anime({
      targets: [target],
      translateX: '-100%',
      translateY: '0%',
      scale: 1,
      opacity: 1,
      clipPath:  'circle(100% at 50% 50%)',
      easing: 'linear',
      duration: 333
    });
  }

  function navClose(target) {
    anime({
      targets: [target],
      translateX: '0%',
      translateY: '-100%',
      scale: ['.5',1],
      opacity: 0,
      clipPath: 'circle(20% at 50% 50%)',
      easing: 'linear',
      duration: 333
    });
  };

  trigger.addEventListener('click', function(){
    if (navIsOpen == false) {
      targetNavbar.classList.add('is-active');
      navOpen(target);

      if (wrapper !=- null) {
        wrapper.classList.add('is-active')
      };

      footer.classList.add('is-blurred');

      navIsOpen = true;
    }
    else {
      targetNavbar.classList.remove('is-active');
      navClose(target);

      if (wrapper !=- null) {
        wrapper.classList.remove('is-active');
      }

      footer.classList.remove('is-blurred');

      navIsOpen = false;
    }
  })
  
};
