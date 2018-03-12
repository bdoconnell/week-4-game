$(document).ready(function() {


// establish variables?
var randomNumber = Math.floor(Math.random() * 101) + 19;


var playerChoice = ("gem1","gem2","gem3","gem4")
var wins = 0;
var losses = 0;
var totalScore = 0;
var gem1 = Math.floor(Math.random() * 12) + 1;
var gem2 = Math.floor(Math.random() * 12) + 1;
var gem3 = Math.floor(Math.random() * 12) + 1;
var gem4 = Math.floor(Math.random() * 12) + 1;

// start game with computer generated random number from 19 to 120?
restart = function() {

}

var  randomNumber = Math.floor(Math.random() * 101) + 19; 



//set restart when?
var restart = function() {
  playerChoice = randomNumber;
  playerChoice > randomNumber;
}




// player clicks gem buttons to try and add up to the same number as the random number?

$(document).ready(function(){
  $("button").click(function(){

  });      
  
});
document.getElementById("gem1","gem2","gem3","gem4").innerHTML = "palyer pick " + guess;

// my if else statements?
  if (playerChoice === randomNumber){
      wins++;
      document.querySelector("#wins").innerHTML = "Wins: " + wins;
      restart();
  } 
  else if (playerChoice > randomNumber) {
      losses++;
      document.querySelector("#lose").innerHTML = "Loses: " + losses;
      restart();
  }
 }

 





//var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//var wins = 0;
//var losses = 0;
//var guessesLeft = 9;
//var letterUser = [];
//var eachofLetters = "";
//var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//function countGuessesLeft() {
//    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
//}
//function farUserGuesses() {
//    document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
//}
//countGuessesLeft();
//var restart = function() {
//    guessesLeft = 9;
//    letterUser = [];
//}
//document.onkeyup = function(event) {
  //  guessesLeft--;
    //var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    //letterUser.push(userGuess);
   // countGuessesLeft();
    //farUserGuesses();
   // if (userGuess === computerGuess){
   //     wins++;
     //   document.querySelector("#wins").innerHTML = "Wins: " + wins;
       // restart();
    //} 
    //else if (guessesLeft === 0) {
     //   losses++;
      //  document.querySelector("#lose").innerHTML = "Loses: " + losses;
       // restart();
   // }
  //};

    

