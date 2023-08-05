import Bomb from "./bomb.mjs";

class Player{
    constructor(num, grid){
        this.life = 1;
        this.bombCount = 1;
        this.explosionForce = 1;
        this.velocity = 1;

        switch(num){
            case 1:
                this.x = 0;
                this.y = 0;
                break;
            case 2:
                this.x = grid.width-1;
                this.y = grid.height-1;
                break;
            case 3:
                this.x = 0;
                this.y = grid.height-1;
                break;
            case 4:
                this.x = grid.width-1;
                this.y = 0;
                break;
        }

        grid.addPlayer(num, this);
    }

    walk(direction, grid){
        switch (direction){
            case 'right':
                if(this.x+1 != grid.width){
                    if (grid.matrix[this.x+1][this.y] == ' '){
                        this.x++;
                        grid.updatePlayerPosition(this.x-1, this.y, this.x, this.y);
                    }
                }
                break;

            case 'left':
                if(this.x-1 >= 0){
                    if (grid.matrix[this.x-1][this.y] == ' '){
                        this.x--;
                        grid.updatePlayerPosition(this.x+1, this.y, this.x, this.y); 
                    } 
                }
                break;

            case 'up':
                if(this.y-1 >= 0){
                    if (grid.matrix[this.x][this.y-1] == ' '){
                        this.y--;
                        grid.updatePlayerPosition(this.x, this.y+1, this.x, this.y); 
                    }  
                }
                break;
        
            case 'down':
                if(this.y+1 != this.height){
                    if (grid.matrix[this.x][this.y+1] == ' '){
                        this.y++;
                        grid.updatePlayerPosition(this.x, this.y-1, this.x, this.y); 
                    }
                }
                break;
        }
    }

    kill(grid){
        this.life--;
        grid.players.pop(this);
    }

    putBomb(grid){
        if(this.bombCount > 0){
            new Bomb(this, grid);
            this.bombCount--;
        }
    }
    
    action(){
        
    }
}

export default Player;