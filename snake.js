import { getInputDirection } from "./input.js";

export let snake_speed=3;
const snakeBody  = [ { x: 14, y: 14} ]
let newSagments = 0
var score = document.getElementById("score");
export let score_number = 1;

export function update(){
    addSegments()

    const inputDirection = getInputDirection()
    for(let i = snakeBody.length - 2; i>= 0; i--){
        snakeBody[i+1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard){
    snakeBody.forEach(segment =>{
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function expandSnake(amount){
    newSagments += amount
    console.log("Added")
    score.innerText = score_number++
}

export function onSnake(position, { ignoreHead = false } = {} ){
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead(){
    return snakeBody[0]
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments(){

    for(let i = 0; i<newSagments; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    newSagments = 0;
}

let submitbtn = document.getElementById('supmit_speed');
submitbtn.addEventListener("click",()=>{
    var input_speed = document.getElementById('speed_number').value;
    snake_speed = input_speed;
})
let setting = document.getElementById('setting');
let play_btn = document.getElementById('play_btn');
play_btn.addEventListener("click",()=>{
    if(setting.style.display=="block"){
        setting.style.display = "none";
    }
    else{
        setting.style.display = "block";
    }
})
