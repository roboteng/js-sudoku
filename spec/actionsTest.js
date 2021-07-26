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
    expected.setCell(0, 0, SolvedCell(1));

    actionStack.push(new SolveCellAction(0, 0, 1));

    expect(actionStack.evaluate()).to.eql(expected);
  });
  it('should change the second cell, if given a SolveCellAction', function () {
    var puzzle = new Sudoku();
    var actionStack = new ActionStack(puzzle);
    var expected = new Sudoku();
    expected.setCell(1, 0, SolvedCell(1));

    actionStack.push(new SolveCellAction(1, 0, 1));

    expect(actionStack.evaluate()).to.eql(expected);
  });
  it('should change the cell, if given a SolveCellAction with a 2', function () {
    var puzzle = new Sudoku();
    var actionStack = new ActionStack(puzzle);
    var expected = new Sudoku();
    expected.setCell(1, 1, SolvedCell(2));

    actionStack.push(new SolveCellAction(1, 1, 2));

    expect(actionStack.evaluate()).to.eql(expected);
  });
});