var setup = function () {
  puzzle = state.puzzle;
  puzzle.numbers = puzzle.numbers.map(function(elem, i) {return new GivenCell(i);});
  puzzle.numbers[1] = new SolvedCell(2);
  puzzle.numbers[2] = new OptionCell();
  puzzle.numbers[2].options[3] = true;
  puzzle.numbers[2].options[5] = true;
  puzzle.numbers[3] = new OptionCell();
  display(state);
};

var state = {pencilMode: false, selectedCells: [], puzzle: new Sudoku()};

$('document').ready(function () {
  setup();
});