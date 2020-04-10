import { GameTemplate } from "./GameTemplate.js";
import { GameObject, MovableGameObject, Ball } from "../GameObject.js";
import{ Paddle } from "./Pong.js"

export class FallingStones extends GameTemplate {

    start() {        
        //game state
        this.gameOver = false;
        this.points = 0;
        this.lives = 5;     
        
        //player
        this.sizePlayer = 50;
        this.player = new Paddle(170, 450, this.sizePlayer, this.sizePlayer, 8);
        
        //bullets
        this.bullets = [];
        this.countBullet = 0;
        
        //stones
        this.stones = [];
        this.distanceStones = 80;

    }


    bindControls(){
        this.inputBinding = {
            "left": this.player.left.bind(this.player),
            "right": this.player.right.bind(this.player),
            "up": this.createBullets.bind(this),
        };
    }

    update(ctx){
        this.player.update(ctx);
        this.updateBullets(ctx);
        this.updateStones(ctx);
        this.checkGameState();
    }

    checkGameState(){
        if(this.lives <= 0){
            this.gameOver = true;
        }
    }

    draw(ctx) {
        this.player.draw(ctx);
        this.bullets.forEach(object => object.draw(ctx));
        this.stones.forEach(stone => stone.draw(ctx));
    }

    createBullets(){
        if(this.countBullet <= 0){
            this.countBullet += 2;
            this.bullets.push(new MovableGameObject(this.player.x + 20, this.player.y + 40, 10, 10, "#121212", 0, -10));
        }
        this.countBullet--;
    }

    updateBullets(ctx){    
        this.bullets.forEach(object => {
            object.update(ctx);
        });
        //TODO: destroy stone and bullet on collision with bullet (also: count points)
    }

    createRandomStones(ctx){
       //TODO random auslagern in Funktion
        //random size and x-position
        let height = Math.random() * (60-20) + 20,
            width = Math.random() * (50-40) + 40;
        let positionX = Math.random() *(ctx.canvas.width -width);
        //random speed
        let speed = Math.random() * (3-1) + 1;

        this.stones.push(new MovableGameObject(positionX, 0-height, width, height, "#333333", 0, 3))
    }

    updateStones(ctx){
        this.stones.forEach(stone => {
            stone.update(ctx);
        });
        
        // destroy Stone on collision with canvas
        this.destroyStones(ctx);


        if(this.distanceStones == 80){
            this.createRandomStones(ctx);
        }        
        this.distanceStones--;
        if(this.distanceStones == 0){
            this.distanceStones = 80;
        }
        
    }

    destroyStones(ctx){
        for(let i = this.stones.length; i--;){
            if(this.stones[i].y >= ctx.canvas.height){
                this.stones.splice(i, 1);
                this.lives--;
            }
        }
    }

    static get NAME(){
        return "Falling Stones";
    }
}
