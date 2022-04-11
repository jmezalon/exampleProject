const sumOfMultiples = require("../sumOfMultiples");

describe("sum all multiples of n from n to m excluding m", () => {
  it("handles positive integers that are the same", () => {
    expect(sumOfMultiples(1, 1)).toBe(0);
    expect(sumOfMultiples(5, 5)).toBe(0);
    expect(sumOfMultiples(1000, 1000)).toBe(0);
  });

  it("handles positive integers that are not the same", () => {
    expect(sumOfMultiples(2, 3)).toBe(2);
    expect(sumOfMultiples(5, 7)).toBe(5);
    expect(sumOfMultiples(5, 30)).toBe(75);
  });

  it("should return invalid if n > m", () => {
    expect(sumOfMultiples(4, 2)).toBe("INVALID");
  });
});
