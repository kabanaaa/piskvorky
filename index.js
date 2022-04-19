/* const tahKolecko = 'circle';
const btnElm = document.querySelectorAll('.btn');

btnElm.addEventListener('click', (event) => {
  event.preventDefault();
  event.target.classList.add('board__field--circle');
}); */

const tahKolecko = (event) => {
  event.target.classList.add('board__field--circle');
};

const buttons = document.querySelectorAll('.btn');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', tahKolecko);
}
