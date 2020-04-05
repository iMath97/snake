export default class Player{
    width;
    height;
    color;
    gameWidth;
    gameHeight
    snake;
    speed;
    direction;
    playerGrow;
    isDead;
    
    constructor(gameWidth, gameHeight, color){
        this.width = 20;
        this.height = 20; 
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.snake = [{x: 400, y: 400}, {x: 420, y: 400}, {x: 440, y: 400}];
        this.color = color;
        this.speed = 20;
        this.direction = "right";
        this.playerGrow = false;
        this.isDead = false;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        for(let i = 0; i<this.snake.length; i++){
            ctx.fillRect(this.snake[i].x, this.snake[i].y, this.width, this.height);
        }
        
    }

    move(){
        let head;
        switch (this.direction) {
            case "right":
                if((this.snake[0].x - this.speed) < 0){
                    head = {x: this.gameWidth-this.width, y: this.snake[0].y + 0};
                } else {
                    head = {x: this.snake[0].x - this.speed, y: this.snake[0].y + 0};
                }
                break;
            case "left":
                if((this.snake[0].x + this.speed) == this.gameWidth){
                    head = {x: 0, y: this.snake[0].y + 0};
                } else {
                    head = {x: this.snake[0].x + this.speed, y: this.snake[0].y + 0};
                }
                break;
            case "up":
                if((this.snake[0].y - this.speed) < 0){
                    head = {x: this.snake[0].x + 0, y: this.gameHeight - this.height};
                } else {
                    head = {x: this.snake[0].x + 0, y: this.snake[0].y - this.speed};
                }
                break;
            case "down":
                if((this.snake[0].y + this.speed) > this.gameHeight){
                    head = {x: this.snake[0].x + 0, y: 0};
                } else {
                    head = {x: this.snake[0].x + 0, y: this.snake[0].y + this.speed};
                }
                break;
        }

        if(this.isDead == false){
            this.snake.unshift(head);
            if(this.playerGrow == false){
                this.snake.pop();
            }
        }
        
        
        this.playerGrow = false;
    }

    setDirection(direction){
        switch (direction) {
            case "right":
                if(this.direction != "left"){
                    this.direction = direction;
                }
                break;
            case "left":
                if(this.direction != "right"){
                    this.direction = direction;
                }
                break;
            case "up":
                if(this.direction != "down"){
                    this.direction = direction;
                }
                break;
            case "down":
                if(this.direction != "up"){
                    this.direction = direction;
                }
                break;
        }
    }

    getPosPlayer(){
        return this.snake[0];
    }

    grow(eaten){
        if(eaten){
            this.playerGrow = true;
        }
    }

    dead(){
        for(let i = 1; i<this.snake.length;i++){
            if(this.snake[0].x == this.snake[i].x && this.snake[0].y == this.snake[i].y){
                this.isDead = true;
            }
        }   
    }

    getIsDead(){
        return this.isDead;
    }
}