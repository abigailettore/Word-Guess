
var letters= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var gameWords = ['michael', 'angela', 'creed', 'kelly', 'pam', 'jim', 'phillis', 'dwight'];

function randomWord(gameWords){
    var random = [Math.floor(Math.random()*gameWords.length)];
    return gameWords[random]
}

function isCorrectGuess(word, letter){
    for(var i=0; i<word.length; i++){
        if (word[i] === letter){
            return true;
        }
    }
    wrong
}

var getBlanks=[];
    for(var i=0; i<word.length; i++){
        getblanks[i]="_";
    }
    

function fillBlanks(word, puzzleState, letter){
    if(isCorrectGuess(word, letter)){
        for(var i=0;i<word.length; i++) {
            if(word[i]===letter){
            puzzleState[i]=letter;
            }
        }
    }
    return puzzleState;
}

function setupRound(word){
    var set = {
        word:word,
        guessesLeft: 9,
        wrongGuesses:[],
        puzzleState: getBlanks(word),

    }
    return set;
}

function updateRound(set, letter){
    if(isCorrectGuess(set.word, letter)=== false){
        set.guessesLeft--;
        set.wrongGuesses.push(letter);
    }
    else{
        fillBlanks(set.word, set.puzzleState, letter)
    }
    return set;
}

function hasWon(puzzleState){
    for(var i=0; i<puzzleState.length; i++){
        if(puzzleState[i] === "_"){
            return false;
        }
    }
    return true;
}

function hasLost(guessesLeft){
    if(guessesLeft=== 0){
        return true;
    }
    return false;
}

function isEndOfRound(set){
    if(set.guessesLeft===0){
        return true;
    }
    if(hasWon(set.puzzleState)){
        return true;
    }
    return false;
}

function setupGame(gameWords,wins,losses){
    var game= {
        words: gameWords,
        wins: wins,
        losses: losses,
        round: setupRound(randomWord(gameWords)),
    }
    return game;
}

function startNewRound(game){
    var puzzleState=game.round.puzzleState;
    if(hasWon(puzzleState)===true){
        game.wins++;
        winRound.play();
        alert("You Win! Very Admirable!");
    }
    else{
        game.losses++;
        alert("You Lose! Very Impish!");
    }
    return game;
}

var myGame= setupGame(gameWords,0,0);

var puzzle=document.getElementById("puzzle-state")
puzzle.innerHTML= myGame.round.puzzleState.join(" ")


var pressedKey;
    document.onkeyup=function(event){
    console.log("The" + pressedKey + "key was pressed");
        isCorrectGuess(myGame.round.word, pressedKey);
        fillBlanks(myGame.round.word, myGame.round.puzzleState, pressedKey);
        updateRound(myGame.round, pressedKey);
        hasWon(myGame.round.puzzleState);
        hasLost(myGame.round.guessesLeft);

if (isEndOfRound(myGame.round)){
    myGame = startNewRound(myGame);
    myGame.round = setupRound(randomWord(gameWords));
}
    document.getElementById("puzzle-state").innerText=myGame.round.puzzleState.join(" ");
    document.getElementById("wrong-guesses").innerText = myGame.round.wrongGuesses.join(" ");
    document.getElementById("win-counter").innerText = myGame.wins;
    document.getElementById("loss-counter").innerText = myGame.losses;
    document.getElementById("guesses-left").innerText = myGame.round.guessesLeft;
    console.log(myGame);
}

}

