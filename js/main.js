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

// colors
let backgroundColor = "#117711";
let playerColor = "#0000f5";
let appleColor = "#ff0000";

// objects
let player = new Player(WIDTH, HEIGHT, playerColor);
let apple = new Apple(WIDTH, HEIGHT, appleColor);

// gameloop
setInterval(gameloop, 200);

function gameloop(){
    draw();
    player.draw(ctx);
    player.move();
    playerPos = player.getPosPlayer();
    apple.draw(ctx);
    playerGrow = apple.checkEaten(playerPos);
    player.grow(playerGrow);
}

// functions
function draw(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
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