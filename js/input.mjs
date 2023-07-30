class CheckInput {
    constructor() {
      this.lastKey = null;
  
      document.addEventListener("keydown", (action) => {
        this.handleKeyPress(action.key, "PRESS");
      });
  
      document.addEventListener("keyup", (action) => {
        this.handleKeyPress(action.key, "RELEASE");
      });
    }
  
    handleKeyPress(key, actionType) {
      switch (key) {
        case "ArrowRight":
          this.lastKey = `${actionType} right`;
          break;
  
        case "ArrowLeft":
          this.lastKey = `${actionType} left`;
          break;
  
        case "ArrowUp":
          this.lastKey = `${actionType} up`;
          break;
  
        case "ArrowDown":
          this.lastKey = `${actionType} down`;
          break;

        case " ":
          this.lastKey = `${actionType} space`;
      }
    }

    inputMovement(players, grid) {
      if(players[0].life > 0){
        switch(this.lastKey){
          case 'PRESS up':
            players[0].walk('up', grid);
            this.lastKey = null;
            break;
  
          case 'PRESS down':
            players[0].walk('down', grid);
            this.lastKey = null;
            break;
  
          case 'PRESS right':
            players[0].walk('right', grid);
            this.lastKey = null;
            break;
  
          case 'PRESS left':
            players[0].walk('left', grid);
            this.lastKey = null;
            break;
  
          case 'PRESS space':
            players[0].putBomb(grid);
            this.lastKey = null;
            break;
        }
      }  
    }

  }
  
  export default CheckInput;