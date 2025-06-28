import { StackObject } from "@/algorithms/stack/stack-object.js";

describe("Stack - Object", () => {
  test("should be create a stack", () => {
    const stack = new StackObject<number>();
    expect(stack).toBeDefined();
  });

  test("should be check if stack is empty", () => {
    const stack = new StackObject<number>();
    expect(stack.isEmpty()).toBe(true);
    stack.push(5);
    expect(stack.isEmpty()).toBe(false);
  });

  test("should be able to push a new item", () => {
    const stack = new StackObject<number>();
    stack.push(5);
    stack.push(8);
    expect(stack.size()).toBe(2);
  });

  test("should be able to pop an item", () => {
    const stack = new StackObject<number>();
    stack.push(5);
    stack.push(8);
    const item = stack.pop();
    expect(item).toBe(8);
    expect(stack.size()).toBe(1);
  });

  test("should be able to peek at the top item", () => {
    const stack = new StackObject<number>();
    stack.push(5);
    stack.push(9);
    stack.push(36);
    const item = stack.peek();
    expect(item).toBe(36);
    expect(stack.size()).toBe(3);
  });

  test("should be clear stack", () => {
    const stack = new StackObject<number>();
    stack.push(5);
    stack.push(9);
    stack.push(36);
    expect(stack.size()).toBe(3);
    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  test("should be ablle top pop all items in order", () => {
    const stack = new StackObject<number>();
    stack.push(5);
    stack.push(9);
    stack.push(36);
    expect(stack.size()).toBe(3);
    const expectedPoppedItems: number[] = [36, 9, 5];
    const poppedItems = stack.popAll();
    expect(poppedItems).toEqual(expectedPoppedItems);
  });
});
