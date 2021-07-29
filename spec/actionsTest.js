describe('Action Stack', function () {
  it('should not change the state, if the stack is empty', function () {
    var puzzle = new Sudoku();
    var actionStack = new ActionStack(puzzle);
    expect(actionStack.evaluate()).to.eql(puzzle);
  });
  it('should change the first cell, if given a SolveCellAction', function () {
    var puzzle = new Sudoku();
    var actionStack = new ActionStack(puzzle);
    var expected = new Sudoku();
    expected.setCell(new Position(0, 0), new SolvedCell(1));

    actionStack.push(new SolveCellAction(new Position(0, 0), 1));

    expect(actionStack.evaluate()).to.eql(expected);
  });
  it('should change the second cell, if given a SolveCellAction', function () {
    var puzzle = new Sudoku();
    var actionStack = new ActionStack(puzzle);
    var expected = new Sudoku();
    expected.setCell(new Position(1, 0), new SolvedCell(1));

    actionStack.push(new SolveCellAction(new Position(1, 0), 1));

    expect(actionStack.evaluate()).to.eql(expected);
  });
  it('should change the cell, if given a SolveCellAction with a 2', function () {
    var puzzle = new Sudoku();
    var actionStack = new ActionStack(puzzle);
    var expected = new Sudoku();
    expected.setCell(new Position(1, 1), new SolvedCell(2));

    actionStack.push(new SolveCellAction(new Position(1, 1), 2));

    expect(actionStack.evaluate()).to.eql(expected);
  });
  it('should return to origonal state, if sent an action and pop', function () {
    var puzzle = new Sudoku();
    var actionStack = new ActionStack(puzzle);
    var expected = new Sudoku();

    actionStack.push(new SolveCellAction(new Position(0, 0), 1));
    actionStack.pop();

    expect(actionStack.evaluate()).to.eql(expected);
  });
});