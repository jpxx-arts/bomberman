class Bomb{
    constructor(player, grid){
        this.x = player.x;
        this.y = player.y;
        grid.grid[this.x][this.y] = grid.blocks.bomb;
    }
}

export default Bomb;