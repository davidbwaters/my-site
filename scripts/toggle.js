//
// Toggle
//

function targetToggle(triggerClass,activeClass) {
  const triggers = document.querySelectorAll('.' + triggerClass);
  
  if (activeClass == undefined) {
    activeClass = 'is-active'
  };
  
  for ( let i = 0; i < triggers.length; i++ ) {
    let target = triggers[i].getAttribute('data-target'),
        targetEl = document.querySelector(target);
    console.log(triggers);
    triggers[i].addEventListener('click', function(){
      targetEl.classList.toggle(activeClass);
    })
  }
  
};


