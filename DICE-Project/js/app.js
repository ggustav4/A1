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


let knapp  = document.getElementById('button0');

let playerrolltext = document.getElementById('playerrolltext');
let AIrrolltext = document.getElementById('AIrrolltext');

let playerroll= 0;
let AIroll = 0;

knapp.addEventListener('click', function(){
  getrandomnumberforplayer();
  showplayerrollresult()
})

function getrandomnumberforplayer(){
  playerroll = Math.floor(Math.random() * 6) + 1;
}

function showplayerrollresult(){
  playerrolltext.innerHTML = playerroll;
}

function getrandomnumberforAI(){
  AIrroll = Math.floor(Math.random() * 6) + 1;
}
function showAIrollresult(){
  AIrrolltext.innerHTML = AIrroll;
}
showAIrollresult();
getrandomnumberforAI();
