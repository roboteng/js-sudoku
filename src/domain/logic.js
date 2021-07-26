var createDigitButtonCallback = function (state, digit) {
  return function (){
    state.selectedCells.forEach(function (index) {
      var x = index % 9;
      var y = Math.floor(index / 9);
      var currentCell = state.puzzle.getNumber(x, y);
      if (state.pencilMode && currentCell instanceof OptionCell){
        var prevValue = currentCell.get(digit);
        currentCell.set(digit, !prevValue);
      }
    });
    display(state);
  }
}