var ActionStack = function (state) {
  this.state = state;
  this.actions = [];
};

ActionStack.prototype = {
  push: function (action) {
    this.actions.push(action);
  },
  evaluate: function () {
    return this.state;
  },
};

var SolveCellAction = function (x, y, digit) {
  this.x = x;
  this.y = y;
  this. digit = digit;
};

var State = function (puzzle) {
    this.pencilMode =  false;
    this.selectedCells = [];
    this.puzzle =  puzzle;
    this.shiftHeld = false;
}