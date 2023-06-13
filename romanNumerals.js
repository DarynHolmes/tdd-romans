// Returns the decimal version of the roman numeral
// from 1 - 10

// write a failing test
// make it pass
// refactor - remove duplication

const romanToDecimal = (romanNumeral) => {
  const numberOfIs = (romanNumeral.match(/I/g) || []).length;
  const numberOfVs = (romanNumeral.match(/V/g) || []).length;

  if (numberOfIs === 1 && numberOfVs === 1) {
    if (romanNumeral[0] === "I") {
      return 4;
    }
    return 6;
  } else if (numberOfVs === 1) {
    return 5;
  } else if (numberOfIs <= 3) {
    return numberOfIs;
  }
};
module.exports = romanToDecimal;
