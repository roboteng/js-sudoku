var setup = function () {
  state.puzzle = sampleSudoku();
  display(state);
};

var state = {pencilMode: false, selectedCells: [], puzzle: new Sudoku()};

$('document').ready(function () {
  setup();
});