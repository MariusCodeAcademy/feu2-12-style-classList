'use strict';
console.log('main.js');

const sectionTitleEl = document.getElementById('sectionTitle');

function makeStyleBig(element) {
  element.style.fontWeight = 'normal';
  element.style.fontWeight = 400;
  element.style.fontSize = '3rem';
  element.style.marginBottom = '0.3em';
}
makeStyleBig(sectionTitleEl);

//  <h4 id="autor">James Band</h4> pritaikyti makeStyleBig stiliu
