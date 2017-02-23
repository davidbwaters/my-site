//
// Page Load Animation
//

function pageLoadAnimation(selector) {
  const element = document.querySelector(selector);

  document.onreadystatechange = function () {
    // check the value - if it's 'interactive' then the DOM has loaded
    if (document.readyState === 'interactive') {
      element.classList.add('is-active');
    }
  }
}