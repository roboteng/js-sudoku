var createDigitButtonCallback = function (state, digit) {
  return function (){
    state.selectedCells.forEach(function (index) {
      var pos = new Position(index);
      var currentCell = state.puzzle.getCell(pos);
      if (state.pencilMode && currentCell instanceof OptionCell){
        var prevValue = currentCell.get(digit);
        currentCell.set(digit, !prevValue);
      } else if (currentCell instanceof OptionCell) {
        state.puzzle.setCell(pos, new SolvedCell(digit));
      }
    });
    display(state);
  }
}

var sampleSudoku = function () {
  var puzzle = new Sudoku();
  for (var i = 0; i < 81; i++){
    puzzle.numbers[i] = new OptionCell();
  }
  puzzle.setCell(new Position(2, 0), new GivenCell(3));
  puzzle.setCell(new Position(5, 0), new GivenCell(7));
  puzzle.setCell(new Position(4, 0), new GivenCell(2));
  puzzle.setCell(new Position(7, 0), new GivenCell(4));
  puzzle.setCell(new Position(1, 1), new GivenCell(6));
  puzzle.setCell(new Position(2, 1), new GivenCell(1));
  puzzle.setCell(new Position(3, 1), new GivenCell(3));
  puzzle.setCell(new Position(5, 1), new GivenCell(9));
  puzzle.setCell(new Position(0, 2), new GivenCell(4));
  puzzle.setCell(new Position(1, 2), new GivenCell(9));
  puzzle.setCell(new Position(4, 2), new GivenCell(6));
  puzzle.setCell(new Position(6, 2), new GivenCell(7));
  puzzle.setCell(new Position(0, 3), new GivenCell(8));
  puzzle.setCell(new Position(2, 3), new GivenCell(4));
  puzzle.setCell(new Position(8, 3), new GivenCell(9));
  puzzle.setCell(new Position(1, 4), new GivenCell(2));
  puzzle.setCell(new Position(2, 4), new GivenCell(7));
  puzzle.setCell(new Position(4, 4), new GivenCell(8));
  puzzle.setCell(new Position(6, 4), new GivenCell(4));
  puzzle.setCell(new Position(7, 4), new GivenCell(6));
  puzzle.setCell(new Position(0, 5), new GivenCell(9));
  puzzle.setCell(new Position(6, 5), new GivenCell(8));
  puzzle.setCell(new Position(8, 5), new GivenCell(2));
  puzzle.setCell(new Position(2, 6), new GivenCell(8));
  puzzle.setCell(new Position(4, 6), new GivenCell(9));
  puzzle.setCell(new Position(7, 6), new GivenCell(5));
  puzzle.setCell(new Position(8, 6), new GivenCell(1));
  puzzle.setCell(new Position(3, 7), new GivenCell(5));
  puzzle.setCell(new Position(5, 7), new GivenCell(1));
  puzzle.setCell(new Position(6, 7), new GivenCell(2));
  puzzle.setCell(new Position(7, 7), new GivenCell(8));
  puzzle.setCell(new Position(1, 8), new GivenCell(1));
  puzzle.setCell(new Position(3, 8), new GivenCell(2));
  puzzle.setCell(new Position(4, 8), new GivenCell(7));
  puzzle.setCell(new Position(6, 8), new GivenCell(6));
  return puzzle;
};