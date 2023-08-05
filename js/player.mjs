import Bomb from "./bomb.mjs";

class Player{
    constructor(num, grid){
        this.num = num;
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
                if(this.x+this.velocity != grid.width){
                    if(grid.matrix[this.x+this.velocity][this.y] == grid.blocks.empty){
                        this.x++;
                        grid.updatePlayerPosition(this.num, this.x-this.velocity, this.y, this.x, this.y);
                        break;
                    }

                    if(grid.matrix[this.x+this.velocity][this.y] == grid.blocks.explosion){
                        this.kill();
                        grid.matrix[this.x][this.y] = grid.blocks.empty;
                        break;
                    }
                }
                break;

            case 'left':
                if(this.x-this.velocity >= 0){
                    if(grid.matrix[this.x-this.velocity][this.y] == grid.blocks.empty){
                        this.x--;
                        grid.updatePlayerPosition(this.num, this.x+this.velocity, this.y, this.x, this.y); 
                        break;
                    } 

                    if(grid.matrix[this.x-this.velocity][this.y] == grid.blocks.explosion){
                        this.kill();
                        grid.matrix[this.x][this.y] = grid.blocks.empty;
                        break;
                    }
                }
                break;

            case 'up':
                if(this.y-this.velocity >= 0){
                    if(grid.matrix[this.x][this.y-this.velocity] == grid.blocks.empty){
                        this.y--;
                        grid.updatePlayerPosition(this.num, this.x, this.y+this.velocity, this.x, this.y); 
                        break;
                    }  

                    if(grid.matrix[this.x][this.y-this.velocity] == grid.blocks.explosion){
                        this.kill();
                        grid.matrix[this.x][this.y] = grid.blocks.empty;
                        break;
                    }
                }
                break;
        
            case 'down':
                if(this.y+this.velocity != this.height){
                    if(grid.matrix[this.x][this.y+this.velocity] == grid.blocks.empty){
                        this.y++;
                        grid.updatePlayerPosition(this.num, this.x, this.y-this.velocity, this.x, this.y);
                        break;
                    }

                    if(grid.matrix[this.x][this.y+this.velocity] == grid.blocks.explosion){
                        this.kill();
                        grid.matrix[this.x][this.y] = grid.blocks.empty;
                        break;
                    }
                }
                break;
        }
    }

    kill(){
        this.life--;
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