import { search } from "@/algorithms/search/binary-search.js";

describe("[704 = Binary Search]", () => {
  test("#1 - should return the index of the target in the array", () => {
    const nums = [-1, 0, 2, 5, 9, 12];
    const target = 9;
    const expected = 4;
    const output = search(nums, target);
    expect(output).toBe(expected);
  });
  test("#2 - should return -1 when the target is not in the array", () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 2;
    const expected = -1;
    const output = search(nums, target);
    expect(output).toBe(expected);
  });
});
