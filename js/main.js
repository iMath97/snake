// imports
import Player from "./player.js";
import Apple from "./apple.js";

// variables
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

const WIDTH = 800;
const HEIGHT = 800;

let playerPos;
let playerGrow;
let playerDead;

// colors
let backgroundColor = "#117711";
let playerColor = "#0000f5";
let appleColor = "#ff0000";
let textColor = "#000000";

// objects
let player = new Player(WIDTH, HEIGHT, playerColor);
let apple = new Apple(WIDTH, HEIGHT, appleColor);

// gameloop
setInterval(gameloop, 100);

function gameloop(){
    draw();
    player.draw(ctx);
    player.move();
    playerPos = player.getPosPlayer();
    apple.draw(ctx);
    playerGrow = apple.checkEaten(playerPos);
    player.grow(playerGrow);
    player.dead();
    playerDead = player.getIsDead();
}

// functions
function draw(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    if(playerDead){
        let tekst = "Game over";
        let lengteTekst = ctx.measureText(tekst).width;
        ctx.fillStyle = textColor;
        ctx.font = "60px Verdana";
        ctx.fillText(tekst, (WIDTH/2)-(lengteTekst/2), 300);
    }
}


// keyboard input
document.onkeydown = function(e) {
    if (e.keyCode === 39) {
        // Left
        player.setDirection("left");
    }
    
    if (e.keyCode === 38) {
        // Up
        player.setDirection("up");
    }

    if (e.keyCode === 40) {
        // Down
        player.setDirection("down");
     }

    if (e.keyCode === 37) {
        // Right
        player.setDirection("right");
    }
}