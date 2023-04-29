const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage= new Image();
playerImage.src = 'person.png'
const spriteWidth = 256
const spriteHeight = 256
let frameX = 0;
let frameY = 0;
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //imagem, x inicial, y inicial, x resolucao da imagem, x do canvas, y do canvas, x maximo do canvas, y maximo do canvas
    ctx.drawImage(playerImage, spriteWidth * frameX, spriteHeight * frameY, spriteWidth, spriteHeight, 0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    if(frameX < 5) frameX++
    else frameX = 0
    
}
canvas.addEventListener("mouseenter", loop)
canvas.addEventListener("mouseleave", endloop)


function loop() {  
    personwalk = setInterval(animate, 100)
}
function endloop() {  
    clearInterval(personwalk)
}
