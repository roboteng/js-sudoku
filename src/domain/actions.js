var ActionStack = function (puzzle) {
  this.puzzle = puzzle;
  this.actions = [];
};

ActionStack.prototype = {
  push: function (action) {
    this.actions.push(action);
  },
  evaluate: function () {
    var puzzle = Object.create(this.puzzle);
    this.actions.forEach(function (action) {
      puzzle.setCell(action.x, action.y, SolvedCell(1));
    });
    return puzzle;
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
    this.shiftHeld = false;
    this.actionStack = new ActionStack(puzzle);
}

State.prototype = {
  getPuzzle: function () {
    return this.actionStack.evaluate()
  },
}