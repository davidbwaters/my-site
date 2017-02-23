//
// Forms
//

function validateElement(el) {

  let result = {};

  function email(el) {
    let x = el.value;
    let atpos = x.indexOf('@');
    let dotpos = x.lastIndexOf('.');
    
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
      return false;
    }
  }

  function filled(el, minLength) {
    let x = el.value;

    if(minLength == undefined || minLength == null) {
      minLength = 1;
    }

    if(x.length < minLength){
      return false;
    }
  }

  if (el.hasAttribute('data-validate') == true) {

    if (el.getAttribute('data-validate') == 'email') {
      result.type = 'email';
      result.status = email(el);
    }
    else if (el.getAttribute('data-validate') == 'length') {
      let minLength = el.getAttribute('data-minimum-length');
      result.type = 'length';
      result.status = filled(el, minLength);
    }

  }

  return result;

}


function validateForm(formEl) {
  let valid = [];

  for (let i = 0; i < form.length; i++) {
    let input = form[i],
        result = validateElement(input);

    if ( result.status == false) { 
      return false;
    }
  }
}


function validationFeedback(formName) {
  
  const form = document.forms[formName],
        submit = form.querySelector('.js-submit');

  function addAlert(el, text){
    if (el.nextElementSibling.classList.contains('c-form__bubble--pass')) {
      el.nextElementSibling.classList.remove('c-form__bubble--pass');
      el.nextElementSibling.classList.add('c-form__bubble--alert');
      el.nextElementSibling.innerHTML = text;
    }
    else if (el.nextElementSibling.classList.contains('c-form__bubble') == false){
      let bubble = document.createElement('DIV');
      bubble.classList.add('c-form__bubble');
      bubble.classList.add('c-form__bubble--alert');
      bubble.innerHTML = text;
      el.parentNode.insertBefore(bubble, el.nextSibling);
      setTimeout(function(){
        bubble.classList.add('is-active');
      },100)
    }
  }
  
  function addPass(el){
    if (el.nextElementSibling.classList.contains('c-form__bubble--alert')) {
      el.nextElementSibling.classList.remove('c-form__bubble--alert');
      el.nextElementSibling.classList.add('c-form__bubble--pass');
      el.nextElementSibling.innerHTML = '';
    }
    else if (el.nextElementSibling.classList.contains('c-form__bubble') == false) {
      let bubble = document.createElement('DIV');
      bubble.classList.add('c-form__bubble');
      bubble.classList.add('c-form__bubble--pass');
      bubble.innerHTML = '';
      el.parentNode.insertBefore(bubble, el.nextSibling);
      setTimeout(function(){
        bubble.classList.add('is-active');
      },100)
    }
  };

  for (let i = 0; i < form.length; i++) {

    let input = form[i];

    function listen(input) {
      if (input.type != 'submit') {
        input.addEventListener('blur', function(e) {
          let validation = validateElement(input);

          if(validation.status == false) {
            if (validation.type == 'email') {
              addAlert(e.target, 'Please enter a valid email address.');
            }
            else if (validation.type == 'length') {
              addAlert(e.target, 'This field cannot be empty.');
            }
          }
          else {
            addPass(e.target)
          }
        })
        input.addEventListener('focus', function(e){
          if (submit.classList.contains('is-successful')) {
            submit.classList.remove('is-successful');
          }
          if (submit.classList.contains('is-alerted')) {
            submit.classList.remove('is-alerted');
          }
          submit.value = 'Send';
        })
      }
    }
    listen(input);
  }
  
}


function sendForm(formName, submitEl) {

  const form = document.forms[formName];
  let valid,
      submit;


  if (submitEl == undefined || submitEl == null) {
    submit = form.querySelector('.js-submit');
  } 
  else {
    submit = submitEl;
  }

  form.onsubmit = function (e) {
    
    e.preventDefault();

    if (typeof validateForm == 'function') {
      valid = validateForm(form);
    }
    
    console.log(valid)

    if (valid == false) {
      valid = false;
      submit.classList.add('is-alerted');
      submit.value = 'Oops! Fix your info!';
    }
    else {

      // Collect the form data while iterating over the inputs
      let data = {};

      for (let i = 0; i < form.length; i++) {
        var input = form[i];
        if (input.name) {
          data[input.name] = input.value;
        }
      }
      if (submit.classList.contains('is-successful')) {
        submit.classList.remove('is-successful');
      }
      if (submit.classList.contains('is-alerted')) {
        submit.classList.remove('is-alerted');
      }
      submit.value = 'Sending...';
      submit.setAttribute('disabled', 'disabled');

      // Construct an HTTP request
      var xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action, true);
      xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

      // Send the collected data as JSON
      xhr.send(JSON.stringify(data));

      // Callback function
      xhr.onloadend = function (response) {
        if (response.target.status === 0) {

          // Failed XmlHttpRequest should be considered an undefined error.
          
          if (submit.classList.contains('is-successful')) {
            submit.classList.remove('is-successful');
          }
          if (submit.classList.contains('is-alerted') == false) {
            submit.classList.add('is-alerted');
          }

          submit.removeAttribute('disabled');  
          submit.value = 'Problem! Try again!';

        } else if (response.target.status === 400) {

          // Bad Request
          if (submit.classList.contains('is-successful')) {
            submit.classList.remove('is-successful');
          }
          if (submit.classList.contains('is-alerted') == false) {
            submit.classList.add('is-alerted');
          }
          submit.removeAttribute('disabled');  
          submit.value = 'Problem! Try again!';

        } else if (response.target.status === 200) {

          // Success
          if (submit.classList.contains('is-alerted')) {
            submit.classList.remove('is-alerted');
          }
          submit.removeAttribute('disabled');
          submit.classList.add('is-successful');
          submit.value = 'Success!';

        }
        
      }
      
    }
    
  }

}
let form = document.forms['contact-form'];

validationFeedback('contact-form')
sendForm('contact-form')