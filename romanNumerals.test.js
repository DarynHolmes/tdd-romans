const romanToDecimal = require("./romanNumerals");

// write a failing test
// make it pass
// refactor - remove duplication

it("should convert I to 1", () => {
  // given, when, then
  const expected = 1;
  //given - inputs
  const input = "I";
  // when - system under test (function we testing)
  const actual = romanToDecimal(input);
  // then - assertions
  expect(actual).toBe(expected);
});

it("should convert II to 2", () => {
  // given, when, then
  const expected = 2;
  //given - inputs
  const input = "II";
  // when - system under test (function we testing)
  const actual = romanToDecimal(input);
  // then - assertions
  expect(actual).toBe(expected);
});

it("should convert III to 3", () => {
  // given, when, then
  const expected = 3;
  //given - inputs
  const input = "III";
  // when - system under test (function we testing)
  const actual = romanToDecimal(input);
  // then - assertions
  expect(actual).toBe(expected);
});

it("should convert IV to 4", () => {
  // given, when, then
  const expected = 4;
  //given - inputs
  const input = "IV";
  // when - system under test (function we testing)
  const actual = romanToDecimal(input);
  // then - assertions
  expect(actual).toBe(expected);
});

it("should convert V to 5", () => {
  // given, when, then
  const expected = 5;
  //given - inputs
  const input = "V";
  // when - system under test (function we testing)
  const actual = romanToDecimal(input);
  // then - assertions
  expect(actual).toBe(expected);
});

it("should convert VI to 6", () => {
  // given, when, then
  const expected = 6;
  //given - inputs
  const input = "VI";
  // when - system under test (function we testing)
  const actual = romanToDecimal(input);
  // then - assertions
  expect(actual).toBe(expected);
});
