let hraje = 'circle';
const hrac = document.querySelector('.gameText img');
const buttons = document.querySelectorAll('button');

const tahKolecko = (event) => {
  event.target.classList.add(`gameArea--${hraje}`);
  event.target.disabled = true;
  if (hraje === 'circle') {
    hraje = 'cross';
  } else {
    hraje = 'circle';
  }
  hrac.src = `${hraje}.svg`;
};

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', tahKolecko);
}
