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