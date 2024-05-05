import { ListNode } from './linked_list';

interface StackInterface<T> {
  get length(): number;
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
}

export default class Stack<T> implements StackInterface<T> {
  private head?: ListNode<T>;
  private tail?: ListNode<T>;
  private _length: number;

  constructor() {
    this.head = this.tail = undefined;
    this._length = 0;
  }

  get length(): number {
    return this._length;
  }
  push(item: T): void {
    const node = new ListNode<T>(item);
    this._length++;

    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this._length--;

    const head = this.head;

    if (this._length === 0) {
      this.head = this.tail = undefined;
    }

    this.head = head.next;
    head.next = undefined;
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
