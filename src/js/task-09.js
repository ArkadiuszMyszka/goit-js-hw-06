/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable strict */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */

'use strict';

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");

function getRandomHexColor() {
 const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
   .padStart(6, 0)}`;
  body.style.backgroundColor = randomColor;
  span.textContent = `${randomColor}`;
}
button.addEventListener("click", getRandomHexColor);
