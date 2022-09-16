const playerEmojiReplace = document.getElementById("player-sign");
const computerEmojiReplace = document.getElementById("computer-sign");
const playerScre = document.querySelector(".score1");
const comptrScre = document.querySelector(".score2");

const anouncement  = document.querySelector(".score-title");
const expandAnnounc  = document.querySelector(".below-score-title");

//popup 
const popup = document.querySelector(".popup-container");
const playAgainBtn = document.getElementById("playAgain");
const youWonyouLost = document.querySelector(".youWon");

let playerScore = 1
let compScore = 1




//Computer random generated choice
let computerHands = ["rock", "paper", "scissors"]
let randomGeneratedHand = computerHands[Math.floor(Math.random() * computerHands.length)];




const buttons = document.querySelectorAll(".options button");
addEventListener("click", function(buttons) {
    playerSelection = buttons.target.id
    playRound()
});



//spēles loģika

function playRound() {
    if (playerSelection == "rock") {
        if (randomGeneratedHand == "scissors") {
            playerEmojiReplace.innerHTML = "✊"
            computerEmojiReplace.innerHTML = "✌️"
            playerScre.innerHTML = "Player: " + playerScore++;
            anouncement.innerHTML = "You Won!"
            expandAnnounc.innerHTML = "Rock beats Scissors"
        } else if (playerSelection == "rock") {
            if (randomGeneratedHand == "rock") {
                playerEmojiReplace.innerHTML = "✊"
                computerEmojiReplace.innerHTML = "✊"
                anouncement.innerHTML = "It's a tie!"
                expandAnnounc.innerHTML = "Rock ties with Rock"
            } else {
                comptrScre.innerHTML = "Computer: " + compScore++;
                playerEmojiReplace.innerHTML = "✊"
                computerEmojiReplace.innerHTML = "✋"
                anouncement.innerHTML = "You lost!"
                expandAnnounc.innerHTML = "Paper beats Rock"
            }
        }
    }
    if (playerSelection == "paper") {
        if (randomGeneratedHand == "rock") {
            playerEmojiReplace.innerHTML = "✋"
            computerEmojiReplace.innerHTML = "✊"
            playerScre.innerHTML = "Player: " + playerScore++;
            anouncement.innerHTML = "You Won!"
            expandAnnounc.innerHTML = "Paper beats Rock"
        } else if (playerSelection == "paper") {
            if (randomGeneratedHand == "paper") {
                playerEmojiReplace.innerHTML = "✋"
                computerEmojiReplace.innerHTML = "✋"
                anouncement.innerHTML = "It's a tie!"
                expandAnnounc.innerHTML = "Paper ties with Paper"
            } else {
                playerEmojiReplace.innerHTML = "✋"
                computerEmojiReplace.innerHTML = "✌️"
                anouncement.innerHTML = "You lost!"
                expandAnnounc.innerHTML = "Scissors beat Paper"
                comptrScre.innerHTML = "Computer: " + compScore++;
                }
            }
        }
        if (playerSelection == "scissors") {
            if (randomGeneratedHand == "paper") {
                playerEmojiReplace.innerHTML = "✌️"
                computerEmojiReplace.innerHTML = "✋"
                playerScre.innerHTML = "Player: " + playerScore++;
                anouncement.innerHTML = "You Won!"
                expandAnnounc.innerHTML = "Scissors beat Paper"
            } else if (playerSelection == "scissors") {
                if (randomGeneratedHand == "scissors") {
                    playerEmojiReplace.innerHTML = "✌️"
                    computerEmojiReplace.innerHTML = "✌️"
                    anouncement.innerHTML = "It's a tie!"
                    expandAnnounc.innerHTML = "Scissors tie with Scissors"
                } else {
                    playerEmojiReplace.innerHTML = "✌️"
                    computerEmojiReplace.innerHTML = "✊"
                    comptrScre.innerHTML = "Computer: " + compScore++;
                    anouncement.innerHTML = "You lost!"
                    expandAnnounc.innerHTML = "Rock beats Scissors"
                }
            }
        }
        if (playerScore == 6) {
            popup.classList.add("show")
            playAgainBtn.addEventListener("click", () => {
                popup.classList.remove("show")
                location.reload();
            })
        }
        if (compScore == 6) {
            popup.classList.add("show")
            playAgainBtn.addEventListener("click", () => {
                popup.classList.remove("show")
                location.reload();
            })
            youWonyouLost.textContent = "You lost..."
            
        }
        randomGeneratedHand = computerHands[Math.floor(Math.random() * computerHands.length)];
    }
    




























