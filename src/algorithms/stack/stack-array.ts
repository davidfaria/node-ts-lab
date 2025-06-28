export class Stack<T> {
  private _items: T[];
  constructor() {
    this._items = [];
  }

  size() {
    return this._items.length;
  }

  isEmpty() {
    return this._items.length === 0;
  }

  push(item: T) {
    this._items.push(item);
  }

  pop(): T | undefined {
    return this._items.pop();
  }

  peek(): T | undefined {
    return this._items[this._items.length - 1];
  }

  clear() {
    this._items = [];
  }

  toString() {
    return `[ ${this._items.join(", ")} ]`;
  }
}
