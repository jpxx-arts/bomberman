class Bomb{
    constructor(player, grid){
        //Bomb properties
        this.x = player.x;
        this.y = player.y;
        this.colors = ['black', 'white'];
        this.colorNum = 0;
        this.color = this.colors[this.colorNum];

        //Relation with the grid (adding the indenfiers in grid matrix)
        grid.matrix[this.x][this.y] = grid.blocks.bomb;
        grid.bombs.push(this);

        //Auto explosion
        this.timeToExplode(player, grid);
    }

    explode(player, grid){
        let found = false;

        for(let block = 1; block <= player.explosionForce; block++){
            if(this.x+block < grid.width){
                if(grid.matrix[this.x+block][this.y] == grid.blocks.block){
                    break;
                }
                if(grid.matrix[this.x+block][this.y] == grid.blocks.brick){
                    grid.matrix[this.x+block][this.y] = grid.blocks.explosion;
                    break;
                }
                for(let player in grid.players){
                    if(grid.matrix[this.x+block][this.y] == grid.blocks.players[player]){
                        grid.players[player].kill();
                        found = true;
                        grid.matrix[this.x+block][this.y] = grid.blocks.explosion;
                        break
                    }
                }
                if(found){
                    found = false;
                    break;
                }

                grid.matrix[this.x+block][this.y] = grid.blocks.explosion;
            }
            else{break;}
        }

        for(let block = 1; block <= player.explosionForce; block++){
            if(this.x-block >= 0){
                if(grid.matrix[this.x-block][this.y] == grid.blocks.block){
                    break;
                }
                if(grid.matrix[this.x-block][this.y] == grid.blocks.brick){
                    grid.matrix[this.x-block][this.y] = grid.blocks.explosion;
                    break;
                }
                for(let player in grid.players){
                    if(grid.matrix[this.x-block][this.y] == grid.blocks.players[player]){
                        grid.players[player].kill();
                        found = false;
                        grid.matrix[this.x-block][this.y] = grid.blocks.explosion;
                        break
                    }
                }
                if(found){
                    found = false;
                    break;
                }

                grid.matrix[this.x-block][this.y] = grid.blocks.explosion;
            }
            else{break;}
        }

        for(let block = 1; block <= player.explosionForce; block++){
            if(this.y+1 < grid.height){
                if(grid.matrix[this.x][this.y+block] == grid.blocks.block){
                    break;
                }
                if(grid.matrix[this.x][this.y+block] == grid.blocks.brick){
                    grid.matrix[this.x][this.y+block] = grid.blocks.explosion;
                    break;
                }
                for(let player in grid.players){
                    if(grid.matrix[this.x][this.y+block] == grid.blocks.players[player]){
                        grid.players[player].kill();
                        found = false;
                        grid.matrix[this.x][this.y+block] = grid.blocks.explosion;
                        break
                    }
                }
                if(found){
                    found = false;
                    break;
                }

                grid.matrix[this.x][this.y+block] = grid.blocks.explosion;
            }
            else{break;}
        }
        
        for(let block = 1; block <= player.explosionForce; block++){
            if(this.y-1 >= 0){
                if(grid.matrix[this.x][this.y-block] == grid.blocks.block){
                    break;
                }
                if(grid.matrix[this.x][this.y-block] == grid.blocks.brick){
                    grid.matrix[this.x][this.y-block] = grid.blocks.explosion;
                    break;
                }
                for(let player in grid.players){
                    if(grid.matrix[this.x][this.y-block] == grid.blocks.players[player]){
                        grid.players[player].kill();
                        found = false;
                        grid.matrix[this.x][this.y-block] = grid.blocks.explosion;
                        break
                    }
                }
                if(found){
                    found = false;
                    break;
                }

                grid.matrix[this.x][this.y-block] = grid.blocks.explosion;
            }
            else{break;}
        }
        
        grid.matrix[this.x][this.y] = grid.blocks.explosion
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