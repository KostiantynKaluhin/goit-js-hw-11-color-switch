const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const bodyRef = document.querySelector('body');
const buttonsContainerRef = document.querySelector('#buttons');
const startButtonRef = document.querySelector('.js-start');
const stopButtonRef = document.querySelector('.js-stop');
buttonsContainerRef.addEventListener('click', buttonsFunction);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let randomColor;
function setNewColor() {
  randomColor = colors[randomIntegerFromInterval(0, 5)];
  bodyRef.removeAttribute('style');
  bodyRef.setAttribute('style', `background-color: ${randomColor}`);
}

stopButtonRef.disabled = true;

let colorInterval;

function buttonsFunction(event, randomColor) {
  if (event.target.textContent === 'Start') {
    startButtonRef.disabled = true;
    stopButtonRef.disabled = false;
    colorInterval = setInterval(setNewColor, 1000);
  } else if (event.target.textContent === 'Stop') {
    startButtonRef.disabled = false;
    stopButtonRef.disabled = true;
    clearInterval(colorInterval);
  }
}
