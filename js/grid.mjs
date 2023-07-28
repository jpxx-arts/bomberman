class Grid{
    constructor(width, height){
        this._width = width;
        this._height = height;
        this._blocks = [' ', '#'];
        this._grid = [];
    }

    randomizeBlock(){
        const choose = Math.random();

        if(choose > 0.65){
            return this._blocks[0];
        }

        return this._blocks[1];
    }

    makeGrid(){
        for(let i = 0; i < this._height; i++){
            let row = [];
            for(let j = 0; j < this._width; j++){
                //Local players 
                if((i == 0 && j == 0) || (i == 0 && j == 1) || (i == 1 && j == 0) || (i == 0 && j == 12) || (i == 0 && j == 11) || (i == 1 && j == 12) || (i == 8 && j == 0) || (i == 8 && j == 1) || (i == 7 && j == 0) || (i == 8 && j == 12) || (i == 8 && j == 11) || (i == 7 && j == 12)){
                    row.push(' ');
                }
                else{
                    //Fixed Blocks
                    if(i%2 != 0 && j%2 != 0){
                        row.push('X');
                    }
                    //Blocks
                    else{
                        row.push(this.randomizeBlock());
                    }
                }
            }
            this._grid.push(row);
        }
    }

    printGrid(){
        for(let i = 0; i < this._height; i++){
            let row = '|';
            for(let j = 0; j < this._width; j++){
                row += this._grid[i][j];
            }
            row += '|';
            console.log(row);
        }
    }
}

export default Grid;