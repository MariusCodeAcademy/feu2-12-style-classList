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

// nusittaikyti i paragrafa su tekstu, uzdedi linijos auksti 1.5 ir padidinti tarpa tarp raidziu keletu pixeliu, padaryti teksta pasvirusi i desine(italic)

// <input type="text" id="artColorInput" placeholder="Article spalva">
// ivedus spalva ta spalva turi nusidazyti article fonas. be mygtuko

//  <button>make article 50% width</button> paspaudus sumazina article ploti iki 50%
