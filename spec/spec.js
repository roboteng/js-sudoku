describe('Sub-grid cell finder', function () {
  var testCases = [
    {input: [0,0], output: 0,},
    {input: [3,0], output: 1,},
    {input: [6,0], output: 2,},
    {input: [0,3], output: 3,},
    {input: [3,3], output: 4,},
    {input: [6,3], output: 5,},
    {input: [0,6], output: 6,},
    {input: [3,6], output: 7,},
    {input: [6,6], output: 8,},
    {input: [1,1], output: 0,},
    {input: [4,4], output: 4,},
    {input: [8,8], output: 8,},
  ];
  for (var i in testCases){
    (function () {
      var testInfo = testCases[i];
      it('should map ' +  testInfo.input + ' to ' + testInfo.output, function () {
        expect(findSubGrid(...testInfo.input)).to.equal(testInfo.output);
      });
    })();
  }
});

describe('OptionCell description', function () {
  it('should give an empty string when all options are false', function () {
    var cell = new OptionCell();
    expect(cell.getInnerHtml()).to.eql('');
  });
  it('should give 1 when only 1 is true', function () {
    var cell = new OptionCell();
    cell.options[1] = true;
    expect(cell.getInnerHtml()).to.eql('1');
  });
  it('should give 2 when only 2 is true', function () {
    var cell = new OptionCell();
    cell.options[2] = true;
    expect(cell.getInnerHtml()).to.eql('2');
  });
  it('should give "3 4" when only 3 & 4 are true', function () {
    var cell = new OptionCell();
    cell.options[3] = true;
    cell.options[4] = true;
    expect(cell.getInnerHtml()).to.eql('3 4');
  });
});

describe('Position', function () {
  it('should generate x and y if given two arguments', function () {
    var pos = new Position(0, 0);

    expect(pos.getX()).to.eql(0);
    expect(pos.getY()).to.eql(0);
    expect(pos.getIndex()).to.eql(0);
  });
  it('should generate x and y if given 1, 0', function () {
    var pos = new Position(1, 0);

    expect(pos.getX()).to.eql(1);
    expect(pos.getY()).to.eql(0);
    expect(pos.getIndex()).to.eql(1);
  });
  it('should generate x and y if given 0, 1', function () {
    var pos = new Position(0, 1);

    expect(pos.getX()).to.eql(0);
    expect(pos.getY()).to.eql(1);
    expect(pos.getIndex()).to.eql(9);
  });
  it('should generate x and y if given one argument', function () {
    var pos = new Position(0);

    expect(pos.getX()).to.eql(0);
    expect(pos.getY()).to.eql(0);
    expect(pos.getIndex()).to.eql(0);
  });
});