describe('triangle', function() {

  it("is false for a triangle in which the sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side", function() {
    expect(triangle(3, 1, 5)).to.equal(false);
  });

  it("is true for a triangle in which the sides are all of equal length", function() {
    expect(triangle(3, 3, 3)).to.equal(true);
  });

  it("is true for a triangle in which exactly two sides are of equal length", function() {
     expect(triangle(3, 3, 2)).to.equal(true);
  });

  it("is true for a triangle in which no sides are of equal length", function() {
     expect(triangle(2, 3, 4)).to.equal(true);
  });

});
