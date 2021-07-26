var Sudoku = function () {
  this.numbers = [];
  for (var i = 0; i < 81; i++) {
    this.numbers.push(new OptionCell());
  }
};

Sudoku.prototype = {
  getCell: function(x,y ) {
    return this.numbers[x + 9 * y];
  },
  setCell: function(x, y, cell) {
    this.numbers[x + 9 * y] = cell;
  }
};

var GivenCell = function (value) {
  this.value = value;
};

GivenCell.prototype = {
  getCSSClass: function () { return 'given-cell'; },
  getInnerHtml: function () { return this.value.toString(); },
};

var SolvedCell = function (value) {
  this.value = value;
}

SolvedCell.prototype = {
  getCSSClass: function () { return 'solved-cell'; },
  getInnerHtml: function () { return this.value.toString(); },
};

var OptionCell = function () {
  this.options = [];
  this.options.push(null);
  for (var i = 1; i <= 9; i++) {
    this.options.push(false);
  }
}

OptionCell.prototype = {
  getCSSClass: function () { return 'option-cell'; },
  getInnerHtml: function () {
    var result = [];
    for (var i = 1; i < 10; i++) {
      if (this.options[i]) {
        result.push(i);
      }
    }
    return result.join(' ');
  },
  set: function (digit, newValue) {
    this.options[digit] = newValue;
  },
  get: function (digit) {
    return this.options[digit];
  }
};
