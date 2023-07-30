import Grid from "./js/grid.mjs";
import CheckInput from "./js/input.mjs";
import Player from "./js/player.mjs";

const grid = new Grid(13, 9);
const p1 = new Player(1, grid);
const p2 = new Player(2, grid);
const p3 = new Player(3, grid);
const p4 = new Player(4, grid);
const players = [p1, p2, p3, p4];
const keyboard = new CheckInput();

const screen = document.getElementById('gameWindow');
const context = screen.getContext('2d');

screen.width = grid.width;
screen.height = grid.height;

function gameLoop(players, keyboard, grid, context){
    grid.runGrid(context);
    keyboard.inputMovement(players, grid);
    
    // grid.printGrid();

    requestAnimationFrame(() => gameLoop(players, keyboard, grid, context));
}

document.addEventListener('DOMContentLoaded', () => {
    gameLoop(players, keyboard, grid, context);
});