/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable strict */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */

'use strict';

const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
input.addEventListener("input", () => {
    text.style.fontSize = `${input.value}px`;
});

