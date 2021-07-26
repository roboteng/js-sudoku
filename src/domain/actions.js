var ActionStack = function (state) {};

var State = function (puzzle) {
    this.pencilMode =  false;
    this.selectedCells = [];
    this.puzzle =  puzzle;
    this.shiftHeld = false;
}