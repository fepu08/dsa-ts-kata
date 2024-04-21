interface StackInterface<T> {
  get length(): number;
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
}

export default class Stack<T> implements StackInterface<T> {
  get length(): number {
    throw new Error('Method not implemented.');
  }
  push(item: T): void {
    throw new Error('Method not implemented.');
  }
  pop(): T | undefined {
    throw new Error('Method not implemented.');
  }
  peek(): T | undefined {
    throw new Error('Method not implemented.');
  }
}
