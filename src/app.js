var setup = function () {
  state.puzzle = sampleSudoku();

  $(document).on('keydown keyup',  function (event) {
    state.shiftHeld = event.shiftKey;
  });

  display(state);
};

var state = new State(new Sudoku());

$(document).ready(setup);