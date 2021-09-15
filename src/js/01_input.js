'use strict';

const cardElements = document.querySelectorAll('.js_preview');
const cardName = document.querySelector('.js-name');
const cardRectangle = document.querySelector('.js-rectangle');
const cardIcons = document.querySelectorAll('.js-icon');
const form = document.querySelector('.profilecards__app');

let data = {
  palette: '',
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
};

function handleFillData(ev) {
  if (ev.target.name === 'palette') {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;
    data[inputName] = inputValue;
  } else if (ev.target.name !== 'photo') {
    const inputId = ev.target.id;
    const inputValue = ev.target.value;
    data[inputId] = inputValue;
  }

  fillCard(data);
  applyColor(data);
}

function fillCard(data) {
  if (data.job !== '') {
    cardElements[1].innerHTML = data.job;
  } else if (data.name !== '') {
    cardElements[0].innerHTML = data.name;
  } else if (data.phone !== '') {
    cardElements[3].innerHTML = data.phone;
  } else if (data.email !== '') {
    cardElements[4].innerHTML = data.email;
  } else if (data.linkedin !== '') {
    cardElements[5].innerHTML = data.linkedin;
  } else if (data.github !== '') {
    let href = 'https://github.com/' + data.github;
    cardElements[6].setAttribute('href', href);
  } else if (data.photo !== '') {
    cardElements[2].setAttribute(
      'style',
      `background-image: url(${data.photo})`
    );
  }
}

function applyColor(data) {
  if (data.palette === '1') {
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
  } else if (data.palette === '2') {
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
  } else if (data.palette === '3') {
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

form.addEventListener('change', handleFillData);
