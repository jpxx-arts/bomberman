class Player{
    constructor(num, grid){
        this._life = 1;
        this._bombCount = 1;
        this._velocity = 1;

        switch(num){
            case 1:
                this._x = 0;
                this._y = 0;
                break;
            case 2:
                this._x = grid._width-1;
                this._y = grid._height-1;
                break;
        }

        grid.addPlayer(num);
    }

    walk(direction, grid){
        switch (direction){
            case 'right':
                if (grid._grid[this._x+1][this._y] == ' '){
                    this._x++;
                    grid.updatePlayerPosition(this._x-1, this._y, this._x, this._y);
                }
                break;

            case 'left':
                if (grid._grid[this._x-1][this._y] == ' '){
                    this._x--;
                    grid.updatePlayerPosition(this._x+1, this._y, this._x, this._y); 
                }  
                break;

            case 'up':
                if (grid._grid[this._x][this._y-1] == ' '){
                    this._y--;
                    grid.updatePlayerPosition(this._x, this._y+1, this._x, this._y); 
                }  
                break;
        
            case 'down':
                if (grid._grid[this._x][this._y+1] == ' '){
                    this._y++;
                    grid.updatePlayerPosition(this._x, this._y-1, this._x, this._y); 
                }  
                break;
        }
    }

    putBomb(){

    }
    
    action(){
        
    }
}

export default Player;