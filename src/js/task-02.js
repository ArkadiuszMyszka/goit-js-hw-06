/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable strict */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */

'use strict';

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// for (let i = 0; i < ingredients.length; i++) {
//   console.log(ingredients[i]);
// }
const elUl = document.querySelector("#ingredients");
ingredients.forEach((a) => {
  const elLi = document.createElement('li');
  elLi.textContent = a;
  elLi.classList.add('item');
  elUl.append(elLi);
  // console.log(a);
});

