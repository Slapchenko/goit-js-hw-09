const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

stopBtn.setAttribute('disabled', '');

function onStartBtnClick() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  stopBtn.removeAttribute('disabled', '');
  startBtn.setAttribute('disabled', '');
}

function onStopBtnClick() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled', '');
  stopBtn.setAttribute('disabled', '');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
