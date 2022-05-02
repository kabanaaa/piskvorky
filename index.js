let hraje = 'circle';
const hrac = document.querySelector('.gameText img');
const buttons = document.querySelectorAll('button');

const getSymbol = (button) => {
  if (button.classList.contains('gameArea--cross')) {
    return 'křížek';
  } else if (button.classList.contains('gameArea--circle')) {
    return 'kolečko';
  }
  return undefined;
};

const boardSize = 10;
const btnElm = document.querySelectorAll('.gameArea button');
const getField = (row, column) => {
  return btnElm[row * boardSize + column];
};

const getPosition = (button) => {
  let fieldIndex = 0;
  while (fieldIndex < btnElm.length && button !== btnElm[fieldIndex]) {
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const symbolsToWin = 5;
const isWinningMove = (button) => {
  const origin = getPosition(button);
  const symbol = getSymbol(button);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};

const tahKolecko = (event) => {
  event.target.classList.add(`gameArea--${hraje}`);
  event.target.disabled = true;
  if (hraje === 'circle') {
    hraje = 'cross';
  } else {
    hraje = 'circle';
  }
  hrac.src = `${hraje}.svg`;

  const winner = isWinningMove(event.target);
  if (winner) {
    const symbol = getSymbol(event.target);
    if (confirm(`Vyhrál ${symbol}. Chcete spustit novou hru?`) === true) {
      location.reload();
    }
  }
};

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', tahKolecko);
}
