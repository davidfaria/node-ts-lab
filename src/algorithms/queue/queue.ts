export class Queue<T> {
  #count: number;
  #lowestCount: number;
  #items: { [key: string]: T };

  constructor() {
    this.#count = 0;
    this.#lowestCount = 0;
    this.#items = {};
  }

  size() {
    return this.#count - this.#lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.#items = {};
    this.#count = 0;
    this.#lowestCount = 0;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.#items[this.#lowestCount];
  }

  enqueue(item: T) {
    this.#items[this.#count] = item;
    this.#count++;
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const item = this.#items[this.#lowestCount];
    delete this.#items[this.#lowestCount];
    this.#lowestCount++;
    return item;
  }

  toString() {
    // return `{ ${Object.values(this.#items).join(", ")} }`;
    return Object.values(this.#items);
  }

  debug() {
    console.log({
      count: this.#count,
      lowestCount: this.#lowestCount,
      items: this.#items,
    });
  }
}
