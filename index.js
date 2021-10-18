const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const bodyRef = document.querySelector('body');
const buttonsDivRef = document.querySelector('#buttons');
const startButtonRef = document.querySelector('.js-start');
const stopButtonRef = document.querySelector('.js-stop');
buttonsDivRef.addEventListener('click', buttonsFunctions);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
