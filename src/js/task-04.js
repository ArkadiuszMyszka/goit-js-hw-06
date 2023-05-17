/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable strict */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */

'use strict';

const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');
// let currentValue = counterValue.textContent;
let counterValue = 0;
function increment() {
    const currentValue = counterValue + 1;
    counterValue = currentValue;
    value.textContent = counterValue;
    }
function decrement() {
    const currentValue = counterValue - 1;
    counterValue = currentValue;
    value.textContent = counterValue;
    }
buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);
