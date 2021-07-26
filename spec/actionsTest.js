describe('Action Stack', function () {
  it('should not change the state, if the stack is empty', function () {
    var state = new State(new Sudoku());
    var actionStack = new ActionStack(state);
    expect(actionStack.evaluate()).to.eql(state);
  });
  it('should change the first cell, if given a SolveCellAction', function () {
    var state = new State(new Sudoku());
    var actionStack = new ActionStack(state);
    var expected = new State(new Sudoku());
    expected.puzzle.setCell(0, 0, SolvedCell(1));

    actionStack.push(new SolveCellAction(0, 0, 1));

    expect(actionStack.evaluate()).to.eql(expected);
  });
  it('should change the second cell, if given a SolveCellAction', function () {
    var state = new State(new Sudoku());
    var actionStack = new ActionStack(state);
    var expected = new State(new Sudoku());
    expected.puzzle.setCell(1, 0, SolvedCell(1));

    actionStack.push(new SolveCellAction(1, 0, 1));

    expect(actionStack.evaluate()).to.eql(expected);
  });
  it('should change the cell, if given a SolveCellAction with a 2', function () {
    var state = new State(new Sudoku());
    var actionStack = new ActionStack(state);
    var expected = new State(new Sudoku());
    expected.puzzle.setCell(1, 1, SolvedCell(2));

    actionStack.push(new SolveCellAction(1, 1, 2));

    expect(actionStack.evaluate()).to.eql(expected);
  });
});