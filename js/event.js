'use strict';
console.log('event.js');

const h1El = document.querySelector('h1');

// event handleris yra aprasytas vietoje su arrow fn
h1El.addEventListener('click', (event) => {
  // debugger;
  console.log(event.target);
  console.log('click1');
});

// event handleris yra atskirai aprasytoje fn

// h1El.addEventListener('click', h1ClickHandler);
document.body.addEventListener('click', h1ClickHandler);

function h1ClickHandler(event) {
  console.log(event.currentTarget); // tas elementas kuriam uzdetas event listeneris
  console.log('click2');
}

h1El.onclick = h1ClickHandler;

function pakelti(num1) {
  console.log(num1 ** 2);
}

let blabla = 50;
pakelti(blabla);
