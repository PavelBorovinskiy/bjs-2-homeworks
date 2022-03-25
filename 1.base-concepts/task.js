"use strict";

<<<<<<< HEAD
function solveEquation(a, b, c) {
    let arr;

    return arr;
=======

function solveEquation(a, b, c) {
  let arr = [];
  let discriminator = Math.pow(b, 2) - 4 * a * c;
  if (discriminator < 0) {

  }
  arr = [];
  if (discriminator == 0) {
    let root = Math.round((-b + Math.sqrt(discriminator)) / (2 * a));
    arr = [root];
  }

  if (discriminator > 0) {
    let root1 = Math.round((-b + Math.sqrt(discriminator)) / (2 * a));
    let root2 = Math.round((-b - Math.sqrt(discriminator)) / (2 * a));
    arr = [root1, root2];
  }

  return arr; // array
>>>>>>> 28a2e454bcb75b04f95f1a1680cb44d83f77c49b
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;

    // код для задачи №2 писать здесь

    return totalAmount;
}