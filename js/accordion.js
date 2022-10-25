'use strict';
console.log('accordion.js');

const allTitlesArr = document.querySelectorAll('.accTitle');
console.log('allTitlesArr ===', allTitlesArr);
console.log('allTitlesArr typeof ===', typeof allTitlesArr);

for (let titleEl of allTitlesArr) {
  titleEl.addEventListener('click', (event) => {
    console.log('click');
    // el ant kurio paspaudziau???
    const currentTitleEl = event.target;
    // KAIP ATSPAUSDINTI event.target ?????
    console.log(event.target);
    // hideAllOpenAccordionElements()
    // parodyti acordiono texta
    currentTitleEl.nextElementSibling.classList.toggle('show');
  });
}

// vienu metu turetu buti atidarytas tik vienas accordionas

/// jei yra atidarytas kazkuris accordionas
// tai turiu ji uzdaryti
// ir tada atidaryti ta kuris paspaustas naujai
