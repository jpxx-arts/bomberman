class Grid{
    constructor(width, height){
        this._width = width;
        this._height = height;
        this._blocks = [' ', '#', 'X', '@'];
        this._grid = [];

        this.makeGrid();
    }

    randomizeBlock(){
        const choose = Math.random();

        if(choose > 0.80){
            return this._blocks[0];
        }

        return this._blocks[1];
    }

    makeGrid(){
        for(let i = 0; i < this._width; i++){
            let column = [];
            for(let j = 0; j < this._height; j++){
                //Local players 
                if((i == 0 && j == 0) || (i == 1 && j == 0) || (i == 0 && j == 1) || (i == 12 && j == 0) || (i == 11 && j == 0) || (i == 12 && j == 1) || (i == 0 && j == 8) || (i == 1 && j == 8) || (i == 0 && j == 7) || (i == 12 && j == 8) || (i == 11 && j == 8) || (i == 12 && j == 7)){
                    column.push(this._blocks[0]);
                }
                else{
                    //Fixed Blocks
                    if(i%2 != 0 && j%2 != 0){
                        column.push(this._blocks[2]);
                    }
                    //Blocks
                    else{
                        column.push(this.randomizeBlock());
                    }
                }
            }
            this._grid.push(column);
        }
    }

    addPlayer(num){
        switch (num){
            case 1:
                this._grid[0][0] = '@';
                break;
            case 2:
                this._grid[this._width - 1][this._height - 1] = '@';
                break;
        }
    }

    updatePlayerPosition(oldX, oldY, x, y){
        this._grid[oldX][oldY] = ' ';
        this._grid[x][y] = '@';
    }

    printGrid(){
        for(let i = 0; i < this._height; i++){
            let row = '|';
            for(let j = 0; j < this._width; j++){
                row += this._grid[j][i];
            }
            row += '|';
            console.log(row);
        }
    }
}

export default Grid;