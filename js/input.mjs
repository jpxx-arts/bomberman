class CheckInput {
    constructor(players, grid) {  
      document.addEventListener("keydown", (action) => {
        this.handleKeyPress(players, grid, action.key, "PRESS");
      });
    }
  
    handleKeyPress(players, grid, key, actionType) {
      if(players[0].life > 0){
        switch (key) {
          case "d":
            players[0].walk('right', grid);
            break;

          case "a":
            players[0].walk('left', grid);
            break;
          
          case "w":
            players[0].walk('up', grid);
            break;

          case "s":
            players[0].walk('down', grid);
            break;

          case "Shift":
            players[0].putBomb(grid);
            break;
        }
      }

      if(players[1].life > 0){
        switch (key){
          case "ArrowRight":
            players[1].walk('right', grid);
            break;
    
          case "ArrowLeft":
            players[1].walk('left', grid);
            break;
    
          case "ArrowUp":
            players[1].walk('up', grid);
            break;
    
          case "ArrowDown":
            players[1].walk('down', grid);
            break;

          case " ":
            players[1].putBomb(grid);
            break;
        }
      }
    }
  }
  
  export default CheckInput;