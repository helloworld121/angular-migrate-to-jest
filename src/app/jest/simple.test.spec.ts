// Unit Tests Paggern => AAA Pattern
// 1) Arrange
// 2) Act
// 3) Assert


// Suggest:
// describe: one suite for each CLASS
//  describe: one suite for each METHOD
//   test: n tests


describe('A suite is just a function', () => {
  let a;

  test('and so is a spec', () => {
    a = true;

    // "toBe" is one of many matchers
    expect(a).toBe(true);
  });

});
