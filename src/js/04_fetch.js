'use strict';

const createdCard = document.querySelector('.js_created-card');
const shareMessage = document.querySelector('.js_share-message');
const generatedLink = document.querySelector('.js_link_created');
const shareButton = document.querySelector('.js_share__button');

function handleShareButton(ev) {
  ev.preventDefault();

  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      createdCard.classList.remove('hidden');
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
