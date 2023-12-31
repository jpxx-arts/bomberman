class Grid{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.matrix = [];
        this.gridBlockLen = 1;
        this.players = [];
        this.bombs = [];

        this.blocks = {
            empty: ' ',
            brick: '#',
            block: 'X',
            players: ['1', '2', '3', '4'],
            bomb: '*',
            explosion: '-',
        };

        // Set the initial face of matrix
        this.makeGrid();
    }

    // Provides a random block, being an empty (with 20% of chance) or a brick (with 80% of chance)
    randomizeBlock(){
        const choose = Math.random();

        if(choose > 0.80){
            return this.blocks.empty;
        }

        return this.blocks.brick;
    }

    makeGrid(){
        // Iteration in lines
        for(let i = 0; i < this.width; i++){
            // Iteration in columns
            let column = [];
            for(let j = 0; j < this.height; j++){
                // Local of players 
                if((i == 0 && j == 0) || (i == 1 && j == 0) || (i == 0 && j == 1) || (i == 12 && j == 0) || (i == 11 && j == 0) || (i == 12 && j == 1) || (i == 0 && j == 8) || (i == 1 && j == 8) || (i == 0 && j == 7) || (i == 12 && j == 8) || (i == 11 && j == 8) || (i == 12 && j == 7)){
                    column.push(this.blocks.empty);
                }
                else{
                    // Fixed Blocks
                    if(i%2 != 0 && j%2 != 0){
                        column.push(this.blocks.block);
                    }
                    // Blocks
                    else{
                        column.push(this.randomizeBlock());
                    }
                }
            }
            this.matrix.push(column);
        }
    }

    addPlayer(num, player){
        // Adding players acording with each number
        switch (num){
            case 1:
                this.players.push(player);
                this.matrix[0][0] = this.blocks.players[0];
                break;

            case 2:
                this.players.push(player);
                this.matrix[this.width - 1][this.height - 1] = this.blocks.players[1];
                break;

            case 3:
                this.players.push(player);
                this.matrix[this.width - 1][0] = this.blocks.players[2];
                break;

            case 4:
                this.players.push(player);
                this.matrix[0][this.height - 1] = this.blocks.players[3];
                break;
        }
    }

    updatePlayerPosition(playerNum, oldX, oldY, x, y){
        // Replacement to empty
        if(this.matrix[oldX][oldY] != this.blocks.bomb){
            this.matrix[oldX][oldY] = this.blocks.empty;
        }

        this.matrix[x][y] = this.blocks.players[playerNum-1];
    }

    printGrid(){
        // Print the matrix in console
        for(let j = 0; j < this.height; j++){
            let row = '|';
            for(let i = 0; i < this.width; i++){
                row += this.matrix[i][j];
            }
            row += '|';
            console.log(row);
        }
    }

    runGrid(context){
        for(let i = 0; i < this.width; i++){
            for(let j = 0; j < this.height; j++){
                // Represents the repective block in canvas
                switch(this.matrix[i][j]){
                    case this.blocks.empty:
                        context.fillStyle = 'green';
                        context.fillRect(i, j, 1, 1);
                        break;
                    
                    case this.blocks.players[0]:
                        context.fillStyle = 'yellow';
                        context.fillRect(i, j, 1, 1);
                        break;

                    case this.blocks.players[1]:
                        context.fillStyle = 'blue';
                        context.fillRect(i, j, 1, 1);
                        break;

                    case this.blocks.players[2]:
                        context.fillStyle = 'red';
                        context.fillRect(i, j, 1, 1);
                        break;

                    case this.blocks.players[3]:
                        context.fillStyle = 'white';
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
                        for(const bomb in this.bombs){
                            if(this.bombs[bomb].x == i && this.bombs[bomb].y == j){
                                context.fillStyle = this.bombs[bomb].color;
                                context.fillRect(i, j, 1, 1);
                                break;
                            }
                        }
                        break;

                    case this.blocks.explosion:
                        context.fillStyle = 'orange';
                        context.fillRect(i, j, 1, 1);
                        break;
                }
            }
        }       
    }
}

export default Grid;