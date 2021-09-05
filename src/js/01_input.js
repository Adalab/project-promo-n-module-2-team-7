'use strict';

//elementos HTML
const nameElement = document.querySelector('.js_name'); //clase en fill.html en input
const namePreviewElement = document.querySelector('.js_preview-name'); //clase en hero.html en h2
console.log(nameElement.value);

let data = {
  palette: '',
  fullName: '',
  jobPosition: '',
  email: '',
  phone: '',
  linkedin: '',
  github: ''
};
const form = document.querySelector('.profilecards__app');

function handleName(ev) {
 
  const inputId = ev.target.id;
  const inputValue = ev.target.value;
  console.log(inputId, inputValue);

  data[inputId] = inputValue;
  console.log(data);


  if (!nameElement.value) {
    inputId.innerHTML = inputValue;

  } else {
    console.log(nameElement.value);
    namePreviewElement.innerHTML = nameElement.value;
  }
}

form.addEventListener('change', handleName);
