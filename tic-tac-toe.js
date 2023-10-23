let X = true;
let gameWon = false; // Variable to track game state

window.onload = function () {
  var button = document.getElementsByClassName('btn')[0];
  var square = document.getElementById('board').children;
  var statusElement = document.getElementById('status'); // Get the status element

  button.addEventListener('click', function () {
    gameWon = false; // Reset the game state
    statusElement.classList.remove('you-won');
    statusElement.innerHTML = 'Move your mouse over a square and click to play an X or an O.';

    for (let p = 0; p < square.length; p++) {
      square[p].innerHTML = '';
      square[p].setAttribute('class', 'square');
      square[p].addEventListener('mouseover', function () {
        square[p].classList.add('hover');
      });

      square[p].addEventListener('mouseout', function () {
        square[p].classList.remove('hover');
      });

      square[p].addEventListener('click', function () {
        if (!gameWon) {
          if (X == true && square[p].innerHTML == '') {
            square[p].innerHTML = 'X';
            square[p].classList.add('X');
            X = false;
          } else {
            if (X == false && square[p].innerHTML == '') {
              square[p].innerHTML = 'O';
              square[p].classList.add('O');
              X = true;
            }
          }

          // Check if a player has won
          for (let p = 0; p < square.length; p += 3) {
            if (
              square[p].innerHTML == square[p + 1].innerHTML &&
              square[p].innerHTML == square[p + 2].innerHTML &&
              square[p].innerHTML != ''
            ) {
              gameWon = true; // Set gameWon to true
              // Update the status element with the appropriate message and add the you-won class
              statusElement.innerHTML = 'Congratulations! ' + (X ? 'O' : 'X') + ' is the Winner!';
              statusElement.classList.add('you-won');
            }
          }

          for (let p = 0; p < 3; p += 1) {
            if (
              square[p].innerHTML == square[p + 3].innerHTML &&
              square[p].innerHTML == square[p + 6].innerHTML &&
              square[p].innerHTML != ''
            ) {
              gameWon = true; // Set gameWon to true
              // Update the status element with the appropriate message and add the you-won class
              statusElement.innerHTML = 'Congratulations! ' + (X ? 'O' : 'X') + ' is the Winner!';
              statusElement.classList.add('you-won');
            }
          }

          if (
            square[2].innerHTML == square[4].innerHTML &&
            square[2].innerHTML == square[6].innerHTML &&
            square[2].innerHTML != ''
          ) {
            gameWon = true; // Set gameWon to true
            // Update the status element with the appropriate message and add the you-won class
            statusElement.innerHTML = 'Congratulations! ' + (X ? 'O' : 'X') + ' is the Winner!';
            statusElement.classList.add('you-won');
          }

          if (
            square[0].innerHTML == square[4].innerHTML &&
            square[0].innerHTML == square[8].innerHTML &&
            square[0].innerHTML != ''
          ) {
            gameWon = true; // Set gameWon to true
            // Update the status element with the appropriate message and add the you-won class
            statusElement.innerHTML = 'Congratulations! ' + (X ? 'O' : 'X') + ' is the Winner!';
            statusElement.classList.add('you-won');
          }
        }
      });
    }
  });
};
