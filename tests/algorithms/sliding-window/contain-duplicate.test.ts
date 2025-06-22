import { containsNearbyDuplicate } from "@/algorithms/sliding-window/contain-duplicate-2.js";

describe("[ 219 Contains Duplicate II ]", () => {
  it("#1 - should return true if there are duplicates within k distance", () => {
    const nums = [1, 2, 3, 1];
    const k = 3;
    const output = containsNearbyDuplicate(nums, k);
    expect(output).toBe(true);
  });

  it("#2 - should return false if there are no duplicates within k distance", () => {
    const nums = [1, 0, 1, 1];
    const k = 1;
    const output = containsNearbyDuplicate(nums, k);
    expect(output).toBe(true);
  });

  it("#3 - should return false if there are no duplicates", () => {
    const nums = [1, 2, 3, 1, 2, 3];
    const k = 2;
    const output = containsNearbyDuplicate(nums, k);
    expect(output).toBe(false);
  });
});
