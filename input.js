let upper = document.getElementById('up');
let lefter = document.getElementById('left');
let righter = document.getElementById('right');
let downer = document.getElementById('down');

let inputDirection = { x: 0, y: 0}
let lastInputDirection = { x: 0, y: 0}
window.addEventListener('keydown', e =>{
    switch(e.key){
        case 'ArrowUp':
            if(lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1}
            break
        case 'ArrowDown':
            if(lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1}
            break
        case 'ArrowLeft':
            if(lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0}
            break
        case 'ArrowRight':
            if(lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0}
            break            
    }
})
upper.addEventListener("click",()=>{
    console.log("Heloo up");
    inputDirection = { x: 0, y: -1}
})
lefter.addEventListener("click",()=>{
    console.log("Heloo left");
    inputDirection = { x: -1, y: 0}
})
righter.addEventListener("click",()=>{
    console.log("Heloo right");
    inputDirection = { x: 1, y: 0}
})
downer.addEventListener("click",()=>{
    console.log("Heloo down");
    inputDirection = { x: 0, y: 1}
})

export function getInputDirection(){
    lastInputDirection = inputDirection;
    return inputDirection;
}
