var ActionStack = function (puzzle) {
  this.puzzle = puzzle;
  this.actions = [];
};

ActionStack.prototype = {
  push: function (action) {
    this.actions.push(action);
  },
  pop: function () {
    return this.actions.pop();
  },
  evaluate: function () {
    var puzzle = Object.create(this.puzzle);
    this.actions.forEach(function (action) {
      puzzle.setCell(action.pos, new SolvedCell(action.digit));
    });
    return puzzle;
  },
};

var SolveCellAction = function (pos, digit) {
  this.pos = pos;
  this. digit = digit;
};

var State = function (puzzle) {
  this.pencilMode =  false;
  this.selectedCells = [];
  this.shiftHeld = false;
  this.actionStack = new ActionStack(puzzle);
};

State.prototype = {
  getPuzzle: function () {
    return this.actionStack.evaluate();
  },
};