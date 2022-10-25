'use strict';
console.log('practice.js');

const colorsArr = ['Red', 'Green', 'Blue', 'Violet'];
const navItems = ['index', 'about', 'practice'];

const btn1El = document.getElementById('btn1');
const titleEl = document.getElementById('title');

// paiimti reiksme ir ja panaudoti
const savedTitleFromB4 = localStorage.getItem('docTitle');
console.log('savedTitleFromB4 ===', savedTitleFromB4);
if (savedTitleFromB4 !== null) {
  document.title = savedTitleFromB4;
}

btn1El.addEventListener('click', () => {
  console.log('click');
  const newDocTitle = titleEl.value.trim();
  document.title = newDocTitle;
  // irasyti ir i local storage
  localStorage.setItem('docTitle', newDocTitle);
});

// irasau i localStorage
// localStorage.setItem('userName', 'James Bond');

// pasiimu is localStorage
// const usr = localStorage.getItem('userName');
// console.log('usr ===', usr);
