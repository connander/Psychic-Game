    var gamesWon = 0;
    
    var gamesLost = 0;
    var guessesLeft = 10;
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
console.log(letter)

document.onkeyup = function(event) {
    var playerinput = event.key;

    if(playerinput === letter){
        gamesWon++;
        guessesLeft = 10;
        letter = letters[Math.floor(Math.random() * letters.length)];
console.log(letter)
    }
    else{
        guessesLeft--;
        if( guessesLeft === 0) {
            gamesLost++
            guessesLeft = 10;
            letter = letters[Math.floor(Math.random() * letters.length)];
console.log(letter)
        }
    }

console.log(gamesWon)
console.log(gamesLost)
console.log(guessesLeft)

}

