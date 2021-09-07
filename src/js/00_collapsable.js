/* eslint-disable no-unused-vars */
'use strict';
// elementos de HTML
const fieldset = document.querySelectorAll('.js_fieldset'); //clase en design.html
const collapsable = document.querySelectorAll('.js_collapsable'); //clase en header-collapsable.html
console.log('Hola Mundo');
//handler

function handleClick(ev) {

  let clickedHeader = ev.currentTarget;
  // console.log(clickedHeader);
  const clicked = clickedHeader.parentNode;
  console.log(clicked);
  for (let index = 0; index < collapsable.length; index++) {
    console.log(collapsable[index]);
    if(clickedHeader === collapsable[index]){
      fieldset[index].classList.toggle('hidden');
      collapsable[index].classList.toggle('icon-end--rotate');
    }
    else {
      fieldset[index].classList.add('hidden');
    }
  }
}

for (const item of collapsable) {
  item.addEventListener('click', handleClick);
}
