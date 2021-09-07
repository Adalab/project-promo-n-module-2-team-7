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
      collapsable[index].classList.toggle('icon-end--rotate');
    }
  }
  // for (const item of fieldset) {
  //   console.log(item);
  //   if(clicked === item){
  //     item.classList.remove('hidden');
  //   }
  //   else   {
  //     item.classList.add('hidden');
  //   }
  // }


  // fieldset.classList.toggle('hidden'); // clase en design.scss
  // collapsable.classList.toggle('icon-end--rotate'); //clase en header-collapsable.scss
}

//listener sobre elemento (icon-end)
// collapsable.addEventListener('click', handleClick);

for (const item of collapsable) {
  item.addEventListener('click', handleClick);
}
