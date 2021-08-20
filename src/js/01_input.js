'use strict';

//elementos HTML
const nameElement = document.querySelector('.js_name'); //clase en fill.html en input
const namePreviewElement = document.querySelector('.js_preview-name'); //clase en hero.html en h2
console.log(nameElement.value);

function handleName() {
  if (!nameElement.value) {
    namePreviewElement.innerHTML = 'Nombre Apellido';
  } else {
    console.log(nameElement.value);
    namePreviewElement.innerHTML = nameElement.value;
  }
}

nameElement.addEventListener('keyup', handleName);
