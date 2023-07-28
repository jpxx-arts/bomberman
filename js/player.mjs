class Player{
    constructor(num, grid){
        this._life = 1;
        this._bombCount = 1;
        this._velocity = 1;
        switch(num){
            case 1:
                this._x = 0;
                this._y = 0;
            case 2:
                this._x = grid.width-1;
                this._y = grid.height-1;
        }
    }

    action(){
        
    }

    putBomb(){

    }
}