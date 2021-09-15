'use strict';

const shareButton = document.querySelector('.js_share__button');

// const cardElement = document.querySelector('.js_hero__section');

const generatedLink = document.querySelector('.js_link_created');

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

data.photo = document.querySelector('.js__profile-image').style.backgroundImage;

function handleShareButton(ev){
  ev.preventDefault();
  console.log(data);
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type' : 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //   cardElement.innerHTML = data.cardURL;
      generatedLink.innerHTML =  data.cardURL;
    });
}


shareButton.addEventListener('click',handleShareButton);