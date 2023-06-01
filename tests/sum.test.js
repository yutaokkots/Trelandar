// import the sum.js file found in the same directory
const sum = require('./sum');

// 'test()' function takes three arguments:
// https://jestjs.io/docs/api#testname-fn-timeout
// test(name, fn, timeout)
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});