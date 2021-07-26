var ActionStack = function (state) {
  this.state = state;
  this.actions = [];
};

ActionStack.prototype = {
  push: function (action) {
    this.actions.push(action);
  },
  evaluate: function () {
    var state = Object.assign({}, this.state);
    this.actions.forEach(function (action) {
      state.puzzle.setCell(action.x, action.y, SolvedCell(1));
    });
    return state;
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