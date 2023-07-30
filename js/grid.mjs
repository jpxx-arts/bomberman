class Grid{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.grid = [];

        this.blocks = {
            empty: ' ',
            brick: '#',
            block: 'X',
            player:'@',
            bomb: '*',
        };

        this.makeGrid();
    }

    randomizeBlock(){
        const choose = Math.random();

        if(choose > 0.80){
            return this.blocks.empty;
        }

        return this.blocks.brick;
    }

    makeGrid(){
        for(let i = 0; i < this.width; i++){
            let column = [];
            for(let j = 0; j < this.height; j++){
                //Local players 
                if((i == 0 && j == 0) || (i == 1 && j == 0) || (i == 0 && j == 1) || (i == 12 && j == 0) || (i == 11 && j == 0) || (i == 12 && j == 1) || (i == 0 && j == 8) || (i == 1 && j == 8) || (i == 0 && j == 7) || (i == 12 && j == 8) || (i == 11 && j == 8) || (i == 12 && j == 7)){
                    column.push(this.blocks.empty);
                }
                else{
                    //Fixed Blocks
                    if(i%2 != 0 && j%2 != 0){
                        column.push(this.blocks.block);
                    }
                    //Blocks
                    else{
                        column.push(this.randomizeBlock());
                    }
                }
            }
            this.grid.push(column);
        }
    }

    addPlayer(num){
        switch (num){
            case 1:
                this.grid[0][0] = this.blocks.player;
                break;
            case 2:
                this.grid[this.width - 1][this.height - 1] = this.blocks.player;
                break;
        }
    }

    updatePlayerPosition(oldX, oldY, x, y){
        if(this.grid[oldX][oldY] != this.blocks.bomb){
            this.grid[oldX][oldY] = this.blocks.empty;
        }
        
        this.grid[x][y] = this.blocks.player;
    }

    printGrid(){
        for(let j = 0; j < this.height; j++){
            let row = '|';
            for(let i = 0; i < this.width; i++){
                row += this.grid[i][j];
            }
            row += '|';
            console.log(row);
        }
    }

    runGrid(context){
        for(let i = 0; i < this.width; i++){
            for(let j = 0; j < this.height; j++){
                switch(this.grid[i][j]){
                    case this.blocks.empty:
                        context.fillStyle = 'green';
                        context.fillRect(i, j, 1, 1);
                        break;
                    
                    case this.blocks.player:
                        context.fillStyle = 'yellow';
                        context.fillRect(i, j, 1, 1);
                        break;

                    case this.blocks.block:
                        context.fillStyle = 'grey';
                        context.fillRect(i, j, 1, 1);
                        break;

                    case this.blocks.brick:
                        context.fillStyle = 'brown';
                        context.fillRect(i, j, 1, 1);
                        break;

                    case this.blocks.bomb:
                        context.fillStyle = 'red';
                        context.fillRect(i, j, 1, 1);
                        break;
                }
            }
        }       
    }
}

export default Grid;