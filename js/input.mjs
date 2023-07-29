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
      }
    }
  }
  
  export default CheckInput;