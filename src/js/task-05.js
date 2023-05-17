/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable strict */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */

'use strict';

const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

input.addEventListener("input", () => {
    if (input.value === "") {
        text.textContent = "Anonymous";
    } else {
        text.textContent = input.value;
    }
   });

