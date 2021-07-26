var setup = function () {
  state.puzzle = sampleSudoku();

  $(document).on('keydown keyup',  function (event) {
    state.shiftHeld = event.shiftKey;
    console.log('shift is: ' + state.shiftHeld);
  });

  display(state);
};

var state = {
  pencilMode: false,
  selectedCells: [],
  puzzle: new Sudoku(),
  shiftHeld: false
};

$(document).ready(setup);