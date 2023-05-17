/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable strict */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */

'use strict';

const form = document.querySelector('.login-form');
const object = {
    email: "",
    password: "",
};
function handleSubmit(a) {
    a.preventDefault();
    const {
        elements: { email, password },
    } = a.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Uzupełnij pola!");
    } else {
         object.email = email.value;
        object.password = password.value;
        console.log(object);
        a.currentTarget.reset();
    }
}
form.addEventListener("submit", handleSubmit);


// console.log(input.dataset.length);
// console.log(input.value.length);
