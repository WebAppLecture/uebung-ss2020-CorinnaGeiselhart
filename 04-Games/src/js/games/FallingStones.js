import { GameTemplate } from "./GameTemplate.js";
import { GameObject, MovableGameObject, Ball } from "../GameObject.js";
import{ Paddle } from "./Pong.js"

export class FallingStones extends GameTemplate {

    start() {
        this.widthObjects = 50;
        
        this.gameOver = false;
        this.points = 0;
        

        this.player = new Paddle(170, 450, this.widthObjects, 50, 8);
        //bullets
        this.bullets = [];
        this.countBullet = 0;
        
        //stones
        this.stones = [];
        this.distanceStones = 50;

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
        if(this.distanceStones == 50){
            this.createRandomStones(ctx);
        }
        this.bullets.forEach(object => {
            object.update(ctx);
        });
        this.distanceStones--;
        if(this.distanceStones == 0){
            this.distanceStones = 50;
        }
 
    }

    createRandomStones(ctx){
        let height = Math.random() * 80;
        let width = this.widthObjects;
        let positionX = Math.random() *(ctx.canvas.width -width);
        this.stones.push(new MovableGameObject(positionX, 0-height, width, height, "#333333", 0, 5))
    }

    updateStones(ctx){
        this.stones.forEach(stone => {
        stone.update(ctx);
        });
    }

    static get NAME(){
        return "Falling Stones";
    }
}
