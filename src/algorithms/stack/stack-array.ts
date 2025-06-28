export class Stack<T> {
  #items: T[];
  constructor() {
    this.#items = [];
  }

  size() {
    return this.#items.length;
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  push(item: T) {
    this.#items.push(item);
  }

  pop(): T | undefined {
    return this.#items.pop();
  }

  peek(): T | undefined {
    return this.#items[this.#items.length - 1];
  }

  clear() {
    this.#items = [];
  }

  toString() {
    return `[ ${this.#items.join(", ")} ]`;
  }
}
