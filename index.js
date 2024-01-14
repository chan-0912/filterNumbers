function filterNumbers(numbers) {
    if (numbers.length % 10 != 0) {
      throw new Error("The length of the list must be a multiple of 10.");
    }

  const resultNumbers = numbers.filter(
    (_, index, arr) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0
  );
  return resultNumbers;
}


module.exports = filterNumbers;
