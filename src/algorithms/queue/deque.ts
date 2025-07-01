export class Deque<T> {
  #count: number;
  #lowestCount: number;
  #items: { [key: string]: T };

  constructor() {
    this.#count = 0;
    this.#lowestCount = 0;
    this.#items = {};
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.#count - this.#lowestCount;
  }

  addBack(item: T) {
    this.#items[this.#count] = item;
    this.#count++;
  }

  removeBack(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    this.#count--;
    const item = this.#items[this.#count];
    delete this.#items[this.#count];
    return item;
  }

  peekBack(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.#items[this.#count - 1];
  }

  addFront(item: T) {
    if (this.isEmpty()) {
      this.addBack(item);
    } else if (this.#lowestCount > 0) {
      this.#lowestCount--;
      this.#items[this.#lowestCount] = item;
    } else {
      for (let i = this.#count; i > 0; i--) {
        this.#items[i] = this.#items[i - 1];
      }
      this.#count++;
      this.#lowestCount = 0;
      this.#items[0] = item;
    }
  }

  removeFront(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const item = this.#items[this.#lowestCount];
    delete this.#items[this.#lowestCount];
    this.#lowestCount++;
    return item;
  }

  peekFront(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.#items[this.#lowestCount];
  }

  toString() {
    return `[${Object.values(this.#items).join(", ")}]`;
  }

  toArray() {
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
