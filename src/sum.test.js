const sum = require("./sum.js");

describe("Summing should return", () => {
  it("three when add 1 and 2", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
