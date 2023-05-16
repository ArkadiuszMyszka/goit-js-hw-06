/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable strict */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */

'use strict';

const categoriesValue = document.querySelectorAll(".item");
console.log(`Number of categories:`, categoriesValue.length);


categoriesValue.forEach((a) => {
    const category = a.querySelector("h2");
    console.log(`Category:`, category.textContent);

    const elementsValue = a.querySelectorAll("li");
    console.log(`Elements:`, elementsValue.length);
});
