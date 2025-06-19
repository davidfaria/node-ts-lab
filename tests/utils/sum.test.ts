import { sum } from "@/utils/sum.js";

test("should sum num1 + num2", () => {
  expect(sum(1, 3)).toBe(4);
});
