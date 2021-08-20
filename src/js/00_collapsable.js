'use strict';
/* eslint-disable no-console */
// elementos de HTML
const fieldset = document.querySelector('.js_fieldset'); //clase en design.html
const collapsable = document.querySelector('.js_collapsable'); //clase en header-collapsable.html
console.log('Hola Mundo');
//handler

function handleClick() {
  fieldset.classList.toggle('hidden'); // clase en design.scss
  collapsable.classList.toggle('icon-end--rotate'); //clase en header-collapsable.scss
}

//listener sobre elemento (icon-end)
collapsable.addEventListener('click', handleClick);
