describe('Action Stack', function () {
  it('should not change the state, if the stack is empty', function () {
    var state = new State(new Sudoku());
    var actionStack = new ActionStack(state);
    expect(actionStack.evaluate()).to.eql(state);
  });
});