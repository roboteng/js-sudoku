var ActionStack = function (state) {
  this.state = state;
  this.actions = [];
};

ActionStack.prototype = {
  evaluate: function () {
    return this.state;
  },
};

var State = function (puzzle) {
    this.pencilMode =  false;
    this.selectedCells = [];
    this.puzzle =  puzzle;
    this.shiftHeld = false;
}