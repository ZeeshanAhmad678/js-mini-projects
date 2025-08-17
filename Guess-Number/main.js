const guessRecord = document.querySelector(".guess_record");
const result = document.querySelector(".result");
const lowOrhigh = document.querySelector(".lowOrhigh");
const gameDiv = document.querySelector(".game");


const guessField = document.querySelector(".guess_field");
const guessBtn = document.querySelector(".guess_btn");

let guessCount=1;
let genNum = Math.floor(Math.random() * 100) + 1;
let resetBtn;

function checknum(){
  const userGuess = Number(guessField.value);
  if(guessCount === 1){
      guessRecord.textContent= "Previous Guesses: ";
    }
    guessRecord.textContent = `${guessRecord.textContent} ${userGuess}`;

    if(userGuess===genNum){
      result.textContent="Congratulations! You got it right.";
      result.style.backgroundColor = "green";
      lowOrhigh.textContent = "";
      setGameOver();
    }
    else if(guessCount===10){
      result.textContent="!!!Game Over!!!";
      lowOrhigh.textContent = "";
      setGameOver();
    }
    else{
      result.textContent="Wrong";
      result.style.backgroundColor = "red";
      lowOrhigh.textContent = "";
    }

    if(userGuess > genNum){
      lowOrhigh.textContent = "You are too high.";
    }
    else if(userGuess < genNum){
      lowOrhigh.textContent = "You are too low.";
    }
    
    guessCount++;
    guessField.value="";
    guessField.focus();
}

guessBtn.addEventListener("click", checknum);

function setGameOver() {
  guessField.disabled = true;
  guessBtn.disabled = true;
  resetBtn = document.createElement("button");
  resetBtn.textContent = "New Game";
  gameDiv.appendChild(resetBtn);

  resetBtn.addEventListener("click", resetGame);
}

function resetGame(){
  guessCount =1;

  const resetParas = document.querySelectorAll("p");
  for(const resetPara of resetParas){
    resetPara.textContent = "";
  }

  resetBtn.parentNode.removeChild(resetBtn);

  guessField.disabled = false;
  guessBtn.disabled = false;
  
  guessField.value = "";
  guessField.focus();

  genNum = Math.floor(Math.random() * 100) + 1;
}
