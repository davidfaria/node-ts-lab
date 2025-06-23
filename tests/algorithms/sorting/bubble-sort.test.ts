import { bubbleSort } from "@/algorithms/sorting/bubble-sort.js";

describe("Bubble sort", () => {
  test("#1 - should be order the array numbers", () => {
    const nums = [22, 44, 1, 5, 10, 99, 65, 33, 100, 50, 7];
    const expected = [1, 5, 7, 10, 22, 33, 44, 50, 65, 99, 100];
    const output = bubbleSort([...nums]);
    console.log(`input (nums): [${nums.join(", ")}]`);
    console.log(`output (sorting): [${output.join(", ")}]`);
    expect(output).toEqual(expected);
  });
  test("#2 - should be order the array numbers", () => {
    const nums = [5, 4, 3, 2, 1, 0];
    const expected = [0, 1, 2, 3, 4, 5];
    const output = bubbleSort([...nums]);
    console.log(`input (nums): [${nums.join(", ")}]`);
    console.log(`output (sorting): [${output.join(", ")}]`);
    expect(output).toEqual(expected);
  });
});
