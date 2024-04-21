interface QueueInterface<T> {
  get length(): number;
  enqueue(item: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
}

export default class Queue<T> implements QueueInterface<T> {
  get length(): number {
    throw new Error('Method not implemented.');
  }
  enqueue(item: T): void {
    throw new Error('Method not implemented.');
  }
  dequeue(): T | undefined {
    throw new Error('Method not implemented.');
  }
  peek(): T | undefined {
    throw new Error('Method not implemented.');
  }
}
