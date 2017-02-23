//
// Footer
//

// Set the bottom margin of page wrapper to the height of the header, so we can
// fix it to the bottom of the body

(function(){
  const wrapper = document.querySelector('.js-page-wrapper'),
        footer = document.querySelector('.js-footer');

  let footerHeight;
        
  function setFooterHeight() {
    footerHeight = footer.getBoundingClientRect().height;
    wrapper.style.marginBottom = footerHeight + 'px';
  }

  setFooterHeight()
  console.log(footerHeight);

  window.addEventListener('resize', function(e) {
    setFooterHeight();
    console.log('resize');
  })  

})()

