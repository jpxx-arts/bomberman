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
                this._grid[0][0] = this._blocks[3];
                break;
            case 2:
                this._grid[this._width - 1][this._height - 1] = this._blocks[3];
                break;
        }
    }

    updatePlayerPosition(oldX, oldY, x, y){
        this._grid[oldX][oldY] = this._blocks[0];
        this._grid[x][y] = this._blocks[3];
    }

    printGrid(){
        for(let j = 0; j < this._height; j++){
            let row = '|';
            for(let i = 0; i < this._width; i++){
                row += this._grid[i][j];
            }
            row += '|';
            console.log(row);
        }
    }

    runGrid(context){
        for(let i = 0; i < this._width; i++){
            for(let j = 0; j < this._height; j++){
                switch(this._grid[i][j]){
                    case ' ':
                        context.fillStyle = 'green';
                        context.fillRect(i, j, 1, 1);
                        break;
                    
                    case '@':
                        context.fillStyle = 'yellow';
                        context.fillRect(i, j, 1, 1);
                        break;
                    case 'X':
                        context.fillStyle = 'grey';
                        context.fillRect(i, j, 1, 1);
                        break;
                    case '#':
                        context.fillStyle = 'brown';
                        context.fillRect(i, j, 1, 1);
                        break;
                }
            }
        }       
    }
}

export default Grid;