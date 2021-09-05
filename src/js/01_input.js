'use strict';

//elementos HTML
// const nameElement = document.querySelector('.js_name'); //clase en fill.html en input
// const namePreviewElement = document.querySelector('.js_preview-name'); //clase en hero.html en h2

// const jobPreview = document.querySelector('.js_preview-job');

const cardElements = document.querySelectorAll('.js_preview');

console.log(cardElements);
// console.log(nameElement.value);

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

function handleFillData(ev) {
 
  const inputId = ev.target.id;
  const inputValue = ev.target.value;
  console.log(inputId, inputValue);

  data[inputId] = inputValue;
  console.log(data);

  fillCard(data);

}

function fillCard(data){
  console.log('estoy aqui');
  if(data.fullName !== ''){
    cardElements[0].innerHTML = data.fullName;
  }
  else if (data.jobPosition !== ''){
    cardElements[1].innerHTML = data.jobPosition;
  }
  else if(data.phone !== ''){
    cardElements[2].innerHTML = data.phone;
  }
  else if(data.email !== ''){
    cardElements[3].innerHTML = data.email;
  }
  else if(data.linkedin !== ''){
    cardElements[4].innerHTML = data.linkedin;
  }
  else if(data.github !== ''){
    let href= 'https://github.com/' + data.github ;
    cardElements[5].setAttribute('.href', href );
  }

}


form.addEventListener('change', handleFillData);
