let player1Score = 0;
let player2Score = 0;
let playerOneTurn = true;

// Create variables to store references to the necessary DOM nodes
const playerOneDice = document.getElementById("playerOneDice")
const playerTwoDice = document.getElementById("playerTwoDice")
const message = document.getElementById("message")
const playerOneScoreBoard = document.getElementById("playerOneScoreBoard")
const playerTwoScoreBoard = document.getElementById("playerTwoScoreBoard")
const diceBtn = document.getElementById("diceBtn")
const resetBtn = document.getElementById("resetBtn")

//hook up a Click event listener to the roll dice button and reset button
diceBtn.addEventListener("click", rollDice)
resetBtn.addEventListener("click", reset)

function showDisplayBtn(){
    diceBtn.style.display = "none"
    resetBtn.style.display = "block"
}

function rollDice(){
    const randomNum = Math.floor(Math.random()*6)
    if(playerOneTurn){
        player1Score += randomNum
        playerOneDice.textContent = player1Score;
        playerOneDice.classList.remove("active") 
        playerTwoDice.classList.add("active") 
        playerOneScoreBoard.textContent = player1Score
        message.textContent = "Player 2 turn"
    }
    else{
        
        player2Score += randomNum
        playerTwoDice.textContent = player2Score
        playerTwoDice.classList.remove("active") 
        playerOneDice.classList.add("active") 
        playerTwoScoreBoard.textContent = player2Score
        message.textContent = "Player 1 turn"      
    }
    if(player1Score >= 20){
        playerOneDice.classList.add("active")
        playerTwoDice.classList.remove("active")
        message.innerHTML = "<strong>Player 1 🤩 Win The game ✌</strong>"
        showDisplayBtn()
     }
     else if(player2Score >= 20){
         playerTwoDice.classList.add("active")
         playerOneDice.classList.remove("active")
         message.innerHTML = "<strong>Player 2 🤩 Win The game ✌</strong>"
         showDisplayBtn()
     }
    playerOneTurn = !playerOneTurn
}

function reset(){
    message.textContent = "Player 1 Turn"
    playerOneScoreBoard.textContent = 0
    playerTwoScoreBoard.textContent = 0
    playerOneDice.textContent = "-"
    playerTwoDice.textContent = "-"
    player1Score = 0;
    player2Score = 0;
    playerOneTurn = true;
    resetBtn.style.display="none"
    diceBtn.style.display = "block"
    playerOneDice.classList.add("active")
    playerTwoDice.classList.remove("active")
}