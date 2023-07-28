import Grid from "./js/grid.mjs";
import Player from "./js/player.mjs";

const g = new Grid(13, 9);
const p1 = new Player(1, g);
p1.walk('right', g);
p1.walk('left', g);
p1.walk('down', g);
p1.walk('up', g);

g.printGrid();

console.log(p1._y);