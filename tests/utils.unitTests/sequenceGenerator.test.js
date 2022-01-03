import range from "../../src/scripts/utils/sequenceGenerator.js";

test("To be null", () => {
  expect(range()).toEqual([]);
});

test("To contain 200 & 201", () => {
  expect(range(200, 299, 1)).toEqual(expect.arrayContaining([200, 201]));
});

test("To not contain 404, 400, 502", () => {
  expect(range(200, 299, 1)).toEqual(
    expect.not.arrayContaining([400, 404, 502])
  );
});
