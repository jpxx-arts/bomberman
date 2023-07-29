import Grid from "./js/grid.mjs";
import CheckInput from "./js/input.mjs";
import Player from "./js/player.mjs";

const grid = new Grid(13, 9);
const p1 = new Player(1, grid);
const players = [p1];
const keyboard = new CheckInput();

p1.walk('right', grid);

const screen = document.getElementById('gameWindow');
const context = screen.getContext('2d');

screen.width = grid._width;
screen.height = grid._height;

function gameLoop(players, keyboard, grid, context){
    grid.runGrid(context);
    keyboard.inputMovement(players, grid);
    console.log(keyboard.lastKey);
    

    requestAnimationFrame(() => gameLoop(players, keyboard, grid, context));
}

document.addEventListener('DOMContentLoaded', () => {
    gameLoop(players, keyboard, grid, context);
});