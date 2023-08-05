class CheckInput {
    constructor(players, grid) {  
      document.addEventListener("keydown", (action) => {
        this.handleKeyPress(players, grid, action.key, "PRESS");
      });
    }
  
    handleKeyPress(players, grid, key, actionType) {
      if(players[0].life > 0){
        switch (key) {
          case "ArrowRight":
            players[0].walk('right', grid);
            break;
    
          case "ArrowLeft":
            players[0].walk('left', grid);
            break;
    
          case "ArrowUp":
            players[0].walk('up', grid);
            break;
    
          case "ArrowDown":
            players[0].walk('down', grid);
            break;

          case " ":
            players[0].putBomb(grid);
        }
      }
    }
  }
  
  export default CheckInput;