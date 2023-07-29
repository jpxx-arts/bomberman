import Grid from "./js/grid.mjs";
import CheckInput from "./js/input.mjs";
import Player from "./js/player.mjs";

const g = new Grid(13, 9);
const p1 = new Player(1, g);
// const players = [p1];
const keyboard = new CheckInput();
// p1.walk('right', g);
// p1.walk('left', g);
// p1.walk('down', g);
// p1.walk('up', g);

g.printGrid();

function gameLoop(player, keyboard, grid){
    switch(keyboard.lastKey){
        case 'PRESS up':
            player.walk('up', grid);
            break;
        case 'PRESS down':
            player.walk('down', grid);
            break;
        case 'PRESS right':
            player.walk('right', grid);
            break;
        case 'PRESS left':
            player.walk('left', grid);
            break;
    }

    console.clear();
    grid.printGrid();
}

setInterval(gameLoop, 100, p1, keyboard, g);