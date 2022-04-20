const buttons = document.querySelectorAll('button');
const tahKolecko = (event) => {
  event.target.classList.add('gameArea--circle');
};

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', tahKolecko);
}
