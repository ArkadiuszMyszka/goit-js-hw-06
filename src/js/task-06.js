/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable strict */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */

'use strict';

const input = document.querySelector('#validation-input');
input.addEventListener("blur", () => {
    if (input.dataset.length > input.value.length) {
        input.classList.remove("valid");
        input.classList.add("invalid");
    } else {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
});
