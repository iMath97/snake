export default class Apple{
    
    width;
    height;
    posX;
    posY;
    color;
    isEaten;
    gameWidth;
    gameHeight;
    coordinates;
    
    constructor(gameWidth, gameHeight, color){
        this.width = 20;
        this.height = 20;
        this.color = color;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.isEaten = true;
        this.coordinates = [];
    }

    draw(ctx){
        this.setCoordinates();
        this.generateApple();

        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }

    generateApple(){
        if(this.isEaten){
            this.posX = this.coordinates[Math.floor(Math.random() * this.coordinates.length)];
            this.posY = this.coordinates[Math.floor(Math.random() * this.coordinates.length)];
            
            console.log("x: " + this.posX + ", Y: " + this.posY);

            this.isEaten = false;
        }
    }

    setCoordinates(){
        if(this.isEaten){
            for(let i = 0; i<this.gameWidth;i+=20){
                this.coordinates.push(i);
            }
        }
    }

    getIsEaten(){
        return this.isEaten;
    }

    checkEaten(pos){
        if(pos.x == this.posX && pos.y == this.posY){
            this.isEaten = true;     
            return true;  
        } else {
            return false;
        }
    }
}