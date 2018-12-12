var readlineSync = require('readline-sync');


let currentPlayer = 1;
let possibleMoves = [];
let playedMoves = [];

let oldI = null;
let oldJ = null;
let i = 0;
let j = 0;

for( let i = 0; i < 3; i += 1) {
  possibleMoves[i] = new Array(3).fill('');
  playedMoves[i] = new Array(3).fill('');

}

console.log(playedMoves);
possibleMoves[0][0] = '?';

while(true) {
  var start = readlineSync.question('Play? (yes / no)');

  if (start === 'no'){
    console.log('Goodbye!');
    break;

  } else if (start === 'yes') {
    
    while(true) {
      possibleMoves[i][j] = '?';
      
      console.log(`
      [(${possibleMoves[0][0]}),(${possibleMoves[0][1]}),(${possibleMoves[0][2]})]\n
      [(${possibleMoves[1][0]}),(${possibleMoves[1][1]}),(${possibleMoves[1][2]})]\n
      [(${possibleMoves[2][0]}),(${possibleMoves[2][1]}),(${possibleMoves[2][2]})]\n
      `);
  
      var move = readlineSync.keyIn('a/w/s/d = left/up/right/down c = select',
      {hideEchoBack: true, mask: ''});

      let oldI = i;
      let oldJ = j;

      j = move === 'a' && j - 1 >= 0 ? j - 1 : j;
      j = move === 'd' && j + 1 < possibleMoves.length ? j + 1 : j;
      i = move === 'w' && i - 1 >= 0 ? i - 1 : i;
      i = move === 's' && i + 1 < possibleMoves.length ? i + 1 : i;

      if (move === 'c') {
        possibleMoves[oldI][oldJ] = currentPlayer ? 'X' : 'O';
        currentPlayer = !currentPlayer;
        oldI = null;
        oldJ = null;

          for (let row = 0; row < playedMoves.length; row += 1) {
            for (let col = 0; col < playedMoves.length; col += 1) {
            if(playedMoves[row][col] === '') {
              i = row;
              j = col;
              break;
            }
          }
        }

      }else if(i !== oldI || j !== oldJ) {
        possibleMoves[oldI][oldJ] = '';
      }

      console.clear();
    }

  }
}
