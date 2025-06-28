import { Stack } from "@/algorithms/stack/stack-array.js";

describe("Stack", () => {
  test("Should be create a stack", () => {
    const stack = new Stack<number>();
    expect(stack).toBeDefined();
    expect(stack.size()).toBe(0);
  });

  test("should be able to push a new item", () => {
    const stack = new Stack<number>();
    stack.push(7);
    expect(stack.size()).toBe(1);
    stack.push(10);
    expect(stack.size()).toBe(2);
  });
  test("should be able to pop an item", () => {
    const stack = new Stack<number>();
    stack.push(50);
    stack.push(23);
    const item = stack.pop();
    expect(item).toBe(23);
    expect(stack.size()).toBe(1);
  });

  test("should be empty after popping all items", () => {
    const stack = new Stack<number>();
    expect(stack.isEmpty()).toBe(true);
    stack.push(50);
    stack.push(23);
    stack.pop();
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  test("should be able to peek at the top item", () => {
    const stack = new Stack<number>();
    stack.push(50);
    stack.push(23);
    const item = stack.peek();
    expect(item).toBe(23);
    expect(stack.size()).toBe(2);
  });

  test("should be clear stack", () => {
    const stack = new Stack<number>();
    stack.push(50);
    stack.push(23);
    expect(stack.size()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });
});
