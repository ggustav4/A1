// CREATE BUTTON ID=(BUTTON0)
//CREATE A TEXTVIEW FOR PLAYER DICE RESULT, CRATE TEXTVIEW FOR AI RESULT, CREATE TEXT FEALD
// FRÅN 2AN FOR EALUATION ID = (PLAYER ROLL)
//REFRENCE BUTTON
//BE ABLE TO OPBTAIN A RANDOM NUMBER/ GENERATE ON BUTTON CLICK (1-6) FOR PLAYER, SAME FOR AI
//SHOW DICE RESULT
// STORE THE DICE ROLL NUMBER OF THE PLAYER , SAME FOR THE AI
// SEE RANDOM RESULT AI HAVE ROLLED SAME FOR PLAYER
// SHOW RESULT OF WIN LOSE OR DRAW, USES 2 NUMBERS AND CHECKS FOR LAGER THEN SMALER THEN OR EQUAL TO
// AFTER THAT WE WANT TO VIEW AND GET A EVALUATION, THEN SHOW THE EVALUATION
// ADD AND SHOW TOTAL SCORE, SO A AI SCORE, INCRESSE AI SCORE WHEN AI WINS, INCRESSE PLAYER SCORE WHEN PLAYER WINS

const playerRollText = document.getElementById("playerRollText");
const aiRollText = document.getElementById("aiRollText");
const resultatText = document.getElementById("resultatText");
const playerScoreText = document.getElementById("playerScoreText");
const aiScoreText = document.getElementById("aiScoreText");
const scoreBoardDrawText = document.getElementById("scoreBoardDraw");
const button0 = document.getElementById("button0");


let playerRoll = 0;
let aiRoll= 0;
let playerScore = 0;
let aiScore = 0;
let scoreBoardDraw = 0;


button0.addEventListener( "click", () => {
  getRandomNumberPlayer();
  showRandomNumberPlayer();
  getRandomNumberAi();
  showRandomNumberAi();
  showResult();
  showScoreBoard();



});

function getRandomNumberPlayer() {
  playerRoll = Math.floor(Math.random() * 6 ) +1 ;
}
function showRandomNumberPlayer() {
  playerRollText.innerHTML = " player Score " + playerRoll;
}
function getRandomNumberAi() {
  aiRoll = Math.floor(Math.random() * 6) + 1 ;
}

function showRandomNumberAi() {
  aiRollText.innerHTML = " ai Score " + aiRoll;
}

function showResult() {
  if (playerRoll>aiRoll) {
    playerScore ++;
    resultatText.innerHTML = " player Win ";
  }
  else if (aiRoll>playerRoll){
    aiScore ++;
  resultatText.innerHTML = " ai Win ";
}
  else { scoreBoardDraw ++;
  resultatText.innerHTML = " Draw ";
}
  }

function showScoreBoard() {
  if (playerRoll > aiRoll) {
    playerScoreText.innerHTML = " player Score " + playerScore;
  }
  else if (playerScore < aiRoll) {
    aiScoreText.innerHTML = " ai Score " + aiScore;
  }
  else {
    scoreBoardDrawText.innerHTML = " draw " + scoreBoardDraw;
  }
}




