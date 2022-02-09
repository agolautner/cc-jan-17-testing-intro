const preschoolAdd = require("./preschoolAdd");
const check = require("./myTestLib");
//SAME AS import preschoolAdd from ....
//JUST OLDER SYNTAX

test('adds 1.7 + 6 to equal 7', () => {
  expect(preschoolAdd(1.7, 6)).toBe(7);
});

// check(preschoolAdd(1,4), 5, 'two integers with sum under 10');
// check(preschoolAdd(9,3), 'sok', 'two integers with sum over 10');
// check(preschoolAdd(3,5.6), 8, 'fractional num under 10');
// check(preschoolAdd(-3,3), 0, 'two integers with sum of 0');