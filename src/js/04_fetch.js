'use strict';

//const shareButton = document.querySelector('.js_share__button');

// const cardElement = document.querySelector('.js_hero__section');

//const generatedLink = document.querySelector('.js_link_created');

// const dataUser= {
//   photo: document.querySelector('.js__profile-image').style.backgroundImage,
//   palette: parseInt(document.querySelector('.js_palette:checked').value) ,
//   fullName: document.querySelector('.js_name').value,
//   jobPosition: document.querySelector('.js_input_job').value,
//   email: document.querySelector('.js_input_email').value,
//   phone: document.querySelector('.js_input_mobile').value,
//   linkedin: document.querySelector('.js_input_linkedin').value,
//   github: document.querySelector('.js_input_github').value
// };

const createdCard = document.querySelector('.js_created-card');
const shareMessage = document.querySelector('.js_share-message');
const generatedLink = document.querySelector('.js_link_created');
const shareButton = document.querySelector('.js_share__button');

//data.photo = document.querySelector('.js__profile-image').style.backgroundImage;

// data.photo =
//   'https://images.unsplash.com/photo-1631486508786-db15cc28296e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80';

function handleShareButton(ev) {
  ev.preventDefault();
  console.log(data);

  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      //debugger;
      console.log(data);
      createdCard.classList.remove('hidden');
      //   cardElement.innerHTML = data.cardURL;
      //generatedLink.innerHTML = data.cardURL;
      console.log(data.photo);
      if (data.success === true) {
        shareMessage.innerHTML = 'La tarjeta ha sido creada';
        generatedLink.innerHTML = data.cardURL;
        generatedLink.setAttribute('href', data.cardURL);
      } else {
        shareMessage.innerHTML = 'Error al crear la tarjeta';
        generatedLink.innerHTML =
          'Revisa los datos, pula el botón RESET y vulve a intentarlo';
        generatedLink.removeAttribute('href');
      }
    });
}

shareButton.addEventListener('click', handleShareButton);
