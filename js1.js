import { update as updateSnake, draw as drawSnake, snake_speed, getSnakeHead, snakeIntersection, score_number} from './snake.js'

import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0;
let gameOver = false
const gameBoard = document.getElementById('game-board');

var bttn = document.getElementById('btn');
var msg = document.getElementById('win_msg');
var result = document.getElementById("result");
function main(currentTime){
    if(gameOver){
        result.innerText = score_number-1;
        msg.style.display = "block";
        bttn.addEventListener('click', close);
        function close(){
            console.log("hello");
            msg.style.display = "none";
            window.location = 'https://rafimoz.github.io/SnakeyBites/'
        }
        return
    }
    window.requestAnimationFrame(main)
    const secondScinceLastRound = (currentTime - lastRenderTime) / 1000;
    if( secondScinceLastRound < 1 / snake_speed) return

    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main)

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
