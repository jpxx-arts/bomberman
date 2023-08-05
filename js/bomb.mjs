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

    clearTail(player, grid){
        for(let block = 0; block <= player.explosionForce; block++){
            if(this.x+block < grid.width){
                if(grid.matrix[this.x+block][this.y] == grid.blocks.explosion){
                    grid.matrix[this.x+block][this.y] = grid.blocks.empty;
                }
                else{break;}
            }
            else{break;}
        }

        for(let block = 1; block <= player.explosionForce; block++){
            if(this.x-block >= 0){
                if(grid.matrix[this.x-block][this.y] == grid.blocks.explosion){
                    grid.matrix[this.x-block][this.y] = grid.blocks.empty;
                }
                else{break;}
            }
            else{break;}
        }

        for(let block = 1; block <= player.explosionForce; block++){
            if(this.y+block < grid.height){
                if(grid.matrix[this.x][this.y+block] == grid.blocks.explosion){
                    grid.matrix[this.x][this.y+block] = grid.blocks.empty;
                }
                else{break;}
            }
            else{break;}
        }

        for(let block = 1; block <= player.explosionForce; block++){
            if(this.y-block >= 0){
                if(grid.matrix[this.x][this.y-block] == grid.blocks.explosion){
                    grid.matrix[this.x][this.y-block] = grid.blocks.empty;
                }
                else{break;}
            }
            else{break;}
        }
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
            if(this.y+block < grid.height){
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
            if(this.y-block >= 0){
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
        
        if(this.x == player.x && this.y == player.y){
            player.kill();
        }

        grid.matrix[this.x][this.y] = grid.blocks.explosion
        player.bombCount++;
        
        delete this;
        setTimeout(() => this.clearTail(player, grid), 200);
    }

    bombPulse(player, grid, clock){
        if(this.colorNum+1 == this.colors.length){
            this.colorNum = 0;
        }else{
            this.colorNum++;
        }

        this.color = this.colors[this.colorNum];

        setTimeout(() => this.bombPulse(player, grid, clock-1), 700);
        if(clock == 0){
            this.explode(player, grid);
        }
    }

    timeToExplode(player, grid){
        setTimeout(() => this.bombPulse(player, grid, 2), 700);
    }
}

export default Bomb;