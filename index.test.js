const filterNumbers = require("./index.js");

test("filters numbers according to index", () => {
  const inputList = [2, 3, 4, 5, 6, 12, 34, 56, 78, 20];
  const expectedOutput = [2, 6, 34];

  const result = filterNumbers(inputList);
  expect(result).toEqual(expectedOutput);
});

test("throws error when length of list is not a multiple of 10", () => {
  const inputList = [2, 3, 4, 5, 6, 12, 34, 56, 78, 20, 21, 22];

  expect(() => filterNumbers(inputList)).toThrow(
    "The length of the list must be a multiple of 10."
  );
});
