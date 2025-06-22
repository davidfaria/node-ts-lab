import { twoSum } from "@/algorithms/two-pointers/two-sum.js";

describe("[1 Two Sum]", () => {
  test("#1 - should return indices of the two numbers such that they add up to target", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    const output = twoSum(nums, target);
    expect(output).toEqual(expected);
  });
  test("#2 - should return indices of the two numbers such that they add up to target", () => {
    const nums = [3, 2, 4];
    const target = 6;
    const expected = [1, 2];
    const output = twoSum(nums, target);
    expect(output).toEqual(expected);
  });
  test("#3 - should return indices of the two numbers such that they add up to target", () => {
    const nums = [3, 3];
    const target = 6;
    const expected = [0, 1];
    const output = twoSum(nums, target);
    expect(output).toEqual(expected);
  });
});
