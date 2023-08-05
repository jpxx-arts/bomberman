import Grid from "./js/grid.mjs";
import CheckInput from "./js/input.mjs";
import Player from "./js/player.mjs";

const grid = new Grid(13, 9);
var p1 = new Player(1, grid);
var p2 = new Player(2, grid);
var p3 = new Player(3, grid);
var p4 = new Player(4, grid);
const players = [p1, p2, p3, p4];
const keyboard = new CheckInput(players, grid);

const screen = document.getElementById('gameWindow');
const context = screen.getContext('2d');

screen.width = grid.width;
screen.height = grid.height;

function gameLoop(context){
    grid.runGrid(context);
    
    // grid.printGrid(); // if you want to see the grid on console

    requestAnimationFrame(() => gameLoop(context));
}

document.addEventListener('DOMContentLoaded', () => {
    gameLoop(context);
});