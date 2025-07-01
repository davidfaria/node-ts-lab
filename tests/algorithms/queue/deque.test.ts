import { Deque } from "@/algorithms/queue/deque.js";

describe("Deque", () => {
  test("should be create an empty deque", () => {
    const deque = new Deque<number>();
    expect(deque.isEmpty()).toBeTruthy();
    expect(deque.size()).toBe(0);
  });

  test("should be add item at front", () => {
    const deque = new Deque<number>();
    deque.addFront(5);
    expect(deque.size()).toBe(1);
    expect(deque.isEmpty()).toBeFalsy();
    deque.addFront(8);
    expect(deque.size()).toBe(2);
  });

  test("should be peek at the front", () => {
    const deque = new Deque<number>();
    deque.addFront(5);
    expect(deque.peekFront()).toBe(5);
    deque.addFront(8);
    expect(deque.peekFront()).toBe(8);
  });

  test("should be add item at back", () => {
    const deque = new Deque<number>();
    deque.addBack(5);
    expect(deque.size()).toBe(1);
    expect(deque.isEmpty()).toBeFalsy();
    deque.addBack(8);
    expect(deque.size()).toBe(2);
  });

  test("should be peek at the back", () => {
    const deque = new Deque<number>();
    deque.addBack(5);
    expect(deque.peekBack()).toBe(5);
    deque.addBack(8);
    expect(deque.peekBack()).toBe(8);
  });

  test("should be remove item at back", () => {
    const deque = new Deque<number>();
    deque.addBack(5);
    deque.addBack(8);
    deque.addBack(9);
    expect(deque.size()).toBe(3);
    // deque.debug();

    deque.removeBack();
    expect(deque.peekBack()).toBe(8);
    expect(deque.size()).toBe(2);
    // deque.debug();

    deque.removeBack();
    expect(deque.size()).toBe(1);
    // deque.debug();

    deque.removeBack();
    expect(deque.size()).toBe(0);
    expect(deque.peekBack()).toBeUndefined();
    // deque.debug();
  });

  test("should be remove item at front", () => {
    const deque = new Deque<number>();
    deque.addFront(7);
    deque.addFront(10);
    deque.addFront(55);
    expect(deque.size()).toBe(3);
    deque.debug();

    deque.removeFront();
    expect(deque.peekFront()).toBe(10);
    expect(deque.size()).toBe(2);
    deque.debug();

    deque.removeFront();
    expect(deque.peekFront()).toBe(7);
    expect(deque.size()).toBe(1);
    deque.debug();
  });

  test.only("test flow deque with person names", () => {
    const deque = new Deque<string>();
    expect(deque.isEmpty()).toBeTruthy();
    deque.addBack("Maria");
    deque.addBack("José");
    expect(deque.toArray()).toEqual(["Maria", "José"]);
    deque.addBack("Rute");
    expect(deque.toArray()).toEqual(["Maria", "José", "Rute"]);
    expect(deque.size()).toBe(3);
    expect(deque.isEmpty()).toBeFalsy();
    deque.removeFront();
    expect(deque.toArray()).toEqual(["José", "Rute"]);
    deque.removeBack();
    expect(deque.toArray()).toEqual(["José"]);
    deque.addFront("Maria");
    expect(deque.toArray()).toEqual(["Maria", "José"]);
  });
});
