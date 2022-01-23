'use strict';

const input = document.querySelector('.form-control');
const checkBtn = document.querySelector('.btn');
const warningText = document.querySelector('.warning');

// Functions
const warningTextShow = () => {
  if (warningText.classList.contains('d-none')) {
    warningText.classList.remove('d-none');
  }
};

const warningTextHide = () => {
  if (!warningText.classList.contains('d-none')) {
    warningText.classList.add('d-none');
  }
};

// Events
checkBtn.addEventListener('click', (e) => {
  if (!input.value) {
    warningTextShow();
    return setTimeout(() => warningTextHide(), 2000);
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  const userInput = input.value
    .replace(/\s/g, '')
    .split('')
    .forEach((l) => {
      if (vowels.includes(l)) counter++;
    });

  alert(`There are ${counter} vowels!`);

  input.value = '';
});
