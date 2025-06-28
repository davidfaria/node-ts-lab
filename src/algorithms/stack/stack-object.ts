export class StackObject<T> {
  #items: { [key: string]: T };
  #count: number;

  constructor() {
    this.#items = {};
    this.#count = 0;
  }

  isEmpty() {
    return this.#count === 0;
  }

  size() {
    return this.#count;
  }

  clear() {
    this.#items = {};
    this.#count = 0;
  }

  push(item: T) {
    this.#items[this.#count] = item;
    this.#count++;
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    this.#count--;
    const item = this.#items[this.#count];
    delete this.#items[this.#count];
    return item;
  }

  popAll(): T[] {
    const poppedItems: T[] = [];
    while (!this.isEmpty()) {
      const item = this.pop();
      if (item !== undefined) {
        poppedItems.push(item);
      }
    }

    return poppedItems;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.#items[this.#count - 1];
  }

  toString() {
    return `{ ${Object.values(this.#items).join(", ")} }`;
  }

  toString2() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.#items[0]}`;

    for (let i = 1; i < this.#count; i++) {
      objString = `${objString},${this.#items[i]}`;
    }

    return `{ ${objString} }`;
  }
}
