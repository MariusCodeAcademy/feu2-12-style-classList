'use strict';
console.log('classList.js');

const htmlEls = {
  main: document.querySelector('main'),
};

// classList    API

// element.classList.add - prideti
// element.classList.remove - pasalinti
// element.classList.toggle - toglinti
// element.classList.contains - grazina ar yra tokia klase

// 1. uzdeti <main> klase 'container'
htmlEls.main.classList.add('container');
// 2. <ul class="unlisted"> uzdeti klase 'card'

// 3. uzdeti h1 elementui klase 'mainTitle' aprasyti css faile keleta taisyklius

// 4. paspaudus ant h1 mes ijungiam arba isjungiam 'mainTitle' klase (toggle)

// 5. atvaizduoti su alertu ar <ul class="unlisted"> turi klase unlisted (.contains)
