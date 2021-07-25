var $div = function () {
  return $('<div>');
}

var buildCell = function(cell, x, y, state) {
  var $cell = $('<td></td>');
  $cell.addClass('puzzle-cell');

  $cell.html(cell.getInnerHtml());
  $cell.addClass(cell.getCSSClass());

  $cell.addClass('row-' + y);
  $cell.addClass('col-' + x);
  $cell.addClass('sub-' + findSubGrid(x, y));

  var index = x + y * 9;
  var isSelected = function () {
    return state.selectedCells.includes(index);
  }

  if (isSelected()) {
    $cell.addClass('selected');
  }

  $cell.click(function () {
    if (isSelected()) {
      state.selectedCells = state.selectedCells.filter(function (elem) {
        return elem !== index;
      });
    } else {
      state.selectedCells.push(index);
    }
    display(state);
  });

  return $cell
};

var buildGrid = function (state) {
  var $grid = $('<table>');

  $grid.addClass('grid');

  for (var i = 0; i < 9; i++){
    var $row = $('<tr>');
    $row.addClass('puzzle-row');
    for (var j = 0; j < 9; j++) {
      var $cell = buildCell(state.puzzle.getNumber(j, i), j, i, state);

      $cell.appendTo($row);
    }
    $row.appendTo($grid);
  }

  return $grid;
};

var buildDigitButton = function(state, digit) {
  var $digit = $div();
  var $button = $('<input>');
  $digit.addClass('digit');
  $button.attr('type', 'button');
  $button.attr('value', digit.toString());

  $button.click(function () {
    // TODO
  });

  $button.appendTo($digit);
  return $digit;
};

var buildControls = function (state) {
  var $controls = $div();
  var $digits = $div();
  var $pencilMode = $div();
  var $pencilToggle = $('<input>')

  $controls.addClass('controls');
  $digits.addClass('digits');
  $pencilMode.addClass('pencil-mode');
  $pencilToggle.attr('type', 'button');
  $pencilToggle.attr('value', 'Pencil Marks');
  if (state.pencilMode) {
    $pencilToggle.addClass('checked');
  }

  for (var i = 1; i <= 9; i++) {
    var $digit = buildDigitButton(state, i);
    $digit.appendTo($digits);
  }

  $pencilMode.click(function () {
    state.pencilMode = !state.pencilMode;
    display(state);
  });

  $digits.appendTo($controls);
  $pencilToggle.appendTo($pencilMode);
  $pencilMode.appendTo($controls);

  return $controls;
};

var buildPuzzleArea = function (state) {
  var $puzzle = $div();
  var $grid = buildGrid(state);
  var $controls = buildControls(state);

  $puzzle.addClass('puzzle');
  $controls.addClass('controls');

  $grid.appendTo($puzzle);
  $controls.appendTo($puzzle);
  return $puzzle;
};

var display = function (state) {
  var $app = $('#app');
  $app.text('');
  $('<h1>Sudoku</h1>').appendTo($app);
  buildPuzzleArea(state).appendTo($app);
}