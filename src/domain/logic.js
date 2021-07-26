var createDigitButtonCallback = function (state, digit) {
  return function (){
    state.selectedCells.forEach(function (index) {
      var x = index % 9;
      var y = Math.floor(index / 9);
      var currentCell = state.puzzle.getCell(x, y);
      if (state.pencilMode && currentCell instanceof OptionCell){
        var prevValue = currentCell.get(digit);
        currentCell.set(digit, !prevValue);
      } else if (currentCell instanceof OptionCell) {
        state.puzzle.setCell(x, y, new SolvedCell(digit));
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
  puzzle.setCell(2, 0, new GivenCell(3));
  puzzle.setCell(4, 0, new GivenCell(2));
  puzzle.setCell(5, 0, new GivenCell(7));
  puzzle.setCell(7, 0, new GivenCell(4));
  puzzle.setCell(1, 1, new GivenCell(6));
  puzzle.setCell(2, 1, new GivenCell(1));
  puzzle.setCell(3, 1, new GivenCell(3));
  puzzle.setCell(5, 1, new GivenCell(9));
  puzzle.setCell(0, 2, new GivenCell(4));
  puzzle.setCell(1, 2, new GivenCell(9));
  puzzle.setCell(4, 2, new GivenCell(6));
  puzzle.setCell(6, 2, new GivenCell(7));
  puzzle.setCell(0, 3, new GivenCell(8));
  puzzle.setCell(2, 3, new GivenCell(4));
  puzzle.setCell(8, 3, new GivenCell(9));
  puzzle.setCell(1, 4, new GivenCell(2));
  puzzle.setCell(2, 4, new GivenCell(7));
  puzzle.setCell(4, 4, new GivenCell(8));
  puzzle.setCell(6, 4, new GivenCell(4));
  puzzle.setCell(7, 4, new GivenCell(6));
  puzzle.setCell(0, 5, new GivenCell(9));
  puzzle.setCell(6, 5, new GivenCell(8));
  puzzle.setCell(8, 5, new GivenCell(2));
  puzzle.setCell(2, 6, new GivenCell(8));
  puzzle.setCell(4, 6, new GivenCell(9));
  puzzle.setCell(7, 6, new GivenCell(5));
  puzzle.setCell(8, 6, new GivenCell(1));
  puzzle.setCell(3, 7, new GivenCell(5));
  puzzle.setCell(5, 7, new GivenCell(1));
  puzzle.setCell(6, 7, new GivenCell(2));
  puzzle.setCell(7, 7, new GivenCell(8));
  puzzle.setCell(1, 8, new GivenCell(1));
  puzzle.setCell(3, 8, new GivenCell(2));
  puzzle.setCell(4, 8, new GivenCell(7));
  puzzle.setCell(6, 8, new GivenCell(6));
  return puzzle;
};