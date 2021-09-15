'use strict';

//elementos HTML
// const nameElement = document.querySelector('.js_name'); //clase en fill.html en input
// const namePreviewElement = document.querySelector('.js_preview-name'); //clase en hero.html en h2

// const jobPreview = document.querySelector('.js_preview-job');

const cardElements = document.querySelectorAll('.js_preview');

const cardName = document.querySelector('.js-name');
const cardRectangle = document.querySelector('.js-rectangle');

const cardIcons = document.querySelectorAll('.js-icon');

console.log(cardElements);
// console.log(nameElement.value);

let data = {
  palette: '',
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: ''
};


// let paletteColors = [

//   {color1: '',
//    color2: '',
//   color3: ''
//   },

//   {color4: '',
//   color5: '',
//   color6: ''
//   },

//   {color7: '',
//   color8: '',
//   color9: ''
//   }
// ];


// for (const item of paletteColors) {

  
// }
const form = document.querySelector('.profilecards__app');

function handleFillData(ev) {
  if(ev.target.name === 'palette'){
    const inputName = ev.target.name;
    const inputValue = ev.target.value;
    console.log(inputName, inputValue);
    data[inputName] = inputValue;
  }
  else{
    const inputId = ev.target.id;
    const inputValue = ev.target.value;
    console.log(inputId, inputValue);
  
    data[inputId] = inputValue;
    
  }

  console.log(data);
  fillCard(data);
  applyColor(data);
}

function fillCard(data){
  console.log('estoy aqui');
  if(data.name !== ''){
    cardElements[0].innerHTML = data.name;
  }
  else if (data.job !== ''){
    cardElements[1].innerHTML = data.job;
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
    cardElements[5].setAttribute('href', href );
  }

}

function applyColor(data){
  console.log('estoy en los colores');

  if(data.palette === '1'){
    //cardName es el nombre
    cardName.classList.remove('color1');
    cardName.classList.remove('color4');
    cardName.classList.remove('color7');
    cardName.classList.add('color1');
    //cardRectangle es el palito
    cardRectangle.classList.remove('color2');
    cardRectangle.classList.remove('color5');
    cardRectangle.classList.remove('color8');
    cardRectangle.classList.add('color2');
    //icons son los iconos
    for (const icon of cardIcons) {
      console.log('entra al for');
      //color del icono
      icon.classList.remove('color1');
      icon.classList.remove('color4');
      icon.classList.remove('color7');
      icon.classList.add('color1');
      //color del borde del icono
      icon.classList.remove('color3');
      icon.classList.remove('color6');
      icon.classList.remove('color9');
      icon.classList.add('color3');
    }

  }
  else if(data.palette === '2'){
    cardName.classList.remove('color1');
    cardName.classList.remove('color4');
    cardName.classList.remove('color7');
    cardName.classList.add('color4');
    //cardRectangle es el palito
    cardRectangle.classList.remove('color2');
    cardRectangle.classList.remove('color5');
    cardRectangle.classList.remove('color8');
    cardRectangle.classList.add('color5');
    //icons son los iconos
    for (const icon of cardIcons) {
      console.log('entra al for');
      //color del icono
      icon.classList.remove('color1');
      icon.classList.remove('color4');
      icon.classList.remove('color7');
      icon.classList.add('color4');
      //color del borde del icono
      icon.classList.remove('color3');
      icon.classList.remove('color6');
      icon.classList.remove('color9');
      icon.classList.add('color6');
    }
  }
  else if(data.palette === '3'){
    cardName.classList.remove('color1');
    cardName.classList.remove('color4');
    cardName.classList.remove('color7');
    cardName.classList.add('color7');
    //cardRectangle es el palito
    cardRectangle.classList.remove('color2');
    cardRectangle.classList.remove('color5');
    cardRectangle.classList.remove('color8');
    cardRectangle.classList.add('color8');
    //icons son los iconos
    for (const icon of cardIcons) {
      console.log('entra al for');
      //color del icono
      icon.classList.remove('color1');
      icon.classList.remove('color4');
      icon.classList.remove('color7');
      icon.classList.add('color7');
      //color del borde del icono
      icon.classList.remove('color3');
      icon.classList.remove('color6');
      icon.classList.remove('color9');
      icon.classList.add('color9');
    }
  }
}

// applyColor(data);

form.addEventListener('change', handleFillData);
