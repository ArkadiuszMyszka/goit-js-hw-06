/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable strict */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */

'use strict';

const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const div = document.querySelector("#controls");
const number = div.firstElementChild;



function createStart() {
  const divBox = document.querySelector("#boxes");
  const input = number.value;
  console.log(input);
  let color = "";
  function getRandomHexColor() {
  color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }
  function createBoxes(amount) {
    for (let i = 0; i < amount; i += 1) {
      getRandomHexColor();
      divBox.insertAdjacentHTML("afterbegin", `<div style ="width:${20 + (10 * i)}px; height:${20 + (10 * i)}px; background-color:${color}"></div>`);
      console.log(i);
          }
  }
  createBoxes(input);
}
function destroyBoxes() {
  const divBox = document.querySelector("#boxes");
  divBox.remove();
  div.insertAdjacentHTML("afterend", `<div id="boxes"></div>`);
}
// eslint-disable-next-line no-unused-vars

create.addEventListener("click", createStart);
destroy.addEventListener("click", destroyBoxes);
