class Bomb{
    constructor(player, grid){
        //Bomb properties
        this.x = player.x;
        this.y = player.y;
        this.colors = ['black', 'white'];
        this.colorNum = 0;
        this.color = this.colors[this.colorNum];

        //Relation with the grid (adding the indenfiers in grid matrix)
        grid.grid[this.x][this.y] = grid.blocks.bomb;
        grid.bombs.push(this);

        //Auto explosion
        this.timeToExplode(player, grid);
    }

    killPlayer(player, grid){
        grid.players.pop(player);
    }

    explode(player, grid){
        for(let block = 1; block <= player.explosionForce; block++){
            if(this.x+block < grid.width){
                if(grid.grid[this.x+block][this.y] == grid.blocks.brick){
                    grid.grid[this.x+block][this.y] = grid.blocks.empty;
                    break;
                }
                if(grid.grid[this.x+block][this.y] == grid.blocks.players[0] || grid.grid[this.x+block][this.y] == grid.blocks.players[1] || grid.grid[this.x+block][this.y] == grid.blocks.players[2] || grid.grid[this.x+block][this.y] == grid.blocks.players[3]){
                    grid.grid[this.x+block][this.y] = grid.blocks.empty;
                    break;
                }
            }
            else{break;}
        }
        for(let block = 1; block <= player.explosionForce; block++){
            if(this.x-block >= 0){
                if(grid.grid[this.x-block][this.y] == grid.blocks.brick){
                    grid.grid[this.x-block][this.y] = grid.blocks.empty;
                    break;
                }
                if(grid.grid[this.x-block][this.y] == grid.blocks.players[0] || grid.grid[this.x-block][this.y] == grid.blocks.players[1] || grid.grid[this.x-block][this.y] == grid.blocks.players[2] || grid.grid[this.x-block][this.y] == grid.blocks.players[3]){
                    grid.grid[this.x-block][this.y] = grid.blocks.empty;
                    break;
                }
            }
            else{break;}
        }
        for(let block = 1; block <= player.explosionForce; block++){
            if(this.y+1 < grid.height){
                if(grid.grid[this.x][this.y+block] == grid.blocks.brick){
                grid.grid[this.x][this.y+block] = grid.blocks.empty;
                break;
                }
            }
            else{break;}
        }
        for(let block = 1; block <= player.explosionForce; block++){
            if(this.y-1 >= 0){
                if(grid.grid[this.x][this.y-block] == grid.blocks.brick){
                grid.grid[this.x][this.y-block] = grid.blocks.empty;
                break;
                }
            }
            else{break;}
        }
        
        grid.grid[this.x][this.y] = grid.blocks.empty
        player.bombCount++;
        
        delete this;
    }

    bombPulse(){
        if(this.colorNum+1 == this.colors.length){
            this.colorNum = 0;
        }else{
            this.colorNum++;
        }

        this.color = this.colors[this.colorNum];
    }

    timeToExplode(player, grid){
        // for(let i = 0; i < 3; i++){
        //     setTimeout(() => this.bombPulse(), 1000);
        // }

        setTimeout(() => this.explode(player, grid), 1000);
    }
}

export default Bomb;