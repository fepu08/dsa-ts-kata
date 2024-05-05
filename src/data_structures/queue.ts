import { ListNode } from './linked_list';

interface QueueInterface<T> {
  get length(): number;
  enqueue(item: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
}

export default class Queue<T> implements QueueInterface<T> {
  private _length: number;
  private head?: ListNode<T>;
  private tail?: ListNode<T>;

  constructor() {
    this.head = this.tail = undefined;
    this._length = 0;
  }

  get length(): number {
    return this._length;
  }

  enqueue(item: T): void {
    const node = new ListNode<T>(item);
    this._length++;

    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this._length--;

    const head = this.head;
    this.head = this.head.next;
    head.next = undefined;

    if (this._length === 0) {
      this.tail = undefined;
    }

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
