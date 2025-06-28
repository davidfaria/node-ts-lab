import { Queue } from "@/algorithms/queue/queue";

describe("Queue", () => {
  test("should be create a queue", () => {
    const queue = new Queue();
    expect(queue).toBeDefined();
  });

  test("should be able to enqueue", () => {
    const queue = new Queue();
    queue.enqueue(5);
    expect(queue.isEmpty()).toBeFalsy();
  });

  test("should be able to dequeue", () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(7);
    expect(queue.dequeue()).toBe(5);
    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.dequeue()).toBe(7);
    expect(queue.isEmpty()).toBeTruthy();
  });

  test("should be peek first item", () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(77);
    queue.enqueue(9);
    expect(queue.peek()).toBe(10);
    expect(queue.size()).toBe(3);
    queue.dequeue();
    expect(queue.peek()).toBe(77);
    expect(queue.size()).toBe(2);
  });
});
