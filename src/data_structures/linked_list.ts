import { DListNode, List, ListNode } from '../global';

export class Node<T> implements ListNode<T> {
  public value: T;
  public next?: ListNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }
}

export class DNode<T> implements DListNode<T> {
  public value: T;
  public next?: DListNode<T> | undefined;
  public prev?: DListNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }
}

export class LinkedList<T> implements List<T> {
  public head?: Node<T>;
  public tail?: Node<T>;
  public length: number;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  getAt(index: number): T | undefined {
    throw new Error('Method not implemented.');
  }

  insertAt(item: T, index: number): void {
    if (index > this.length) {
      throw new Error('Invalid index');
    } else if (index === this.length) {
      this.append(item);
      return;
    } else if (index === 0) {
      this.prepend(item);
      return;
    }

    let curr = this.head;
    const node = new Node<T>(item);
    this.length++;

    for (let i = 0; curr && i < index - 1; i++) {
      curr = curr.next;
    }

    node.next = curr!.next;
    curr!.next = node;
  }

  remove(item: T): T | undefined {
    throw new Error('Method not implemented.');
  }
  removeAt(index: number): T | undefined {
    throw new Error('Method not implemented.');
  }
  append(item: T): void {
    const node = new Node<T>(item);
    this.length++;
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    const tmp = this.tail;
    this.tail = node;
    tmp!.next = this.tail;
  }
  prepend(item: T): void {
    const node = new Node<T>(item);
    this.length++;

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }
  get(index: number): T | undefined {
    if (index < 0) return undefined;
    if (!this.head) return undefined;
    if (index === 0) return this.head.value;
    if (index + 1 === this.length) return this.tail?.value;

    let curr = this.head;
    let counter = 0;
    while (curr.next && curr !== this.tail) {
      counter++;
      if (counter === index) {
        return curr.next.value;
      }
      curr = curr.next;
    }
  }
}

class DLinkedList<T> implements LinkedList<T> {
  public head?: Node<T> | undefined;
  public tail?: Node<T> | undefined;
  public length: number;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }
  getAt(index: number): T | undefined {
    throw new Error('Method not implemented.');
  }
  insertAt(item: T, index: number): void {
    throw new Error('Method not implemented.');
  }
  remove(item: T): T | undefined {
    throw new Error('Method not implemented.');
  }
  removeAt(index: number): T | undefined {
    throw new Error('Method not implemented.');
  }
  append(item: T): void {
    throw new Error('Method not implemented.');
  }
  prepend(item: T): void {
    throw new Error('Method not implemented.');
  }
  get(index: number): T | undefined {
    throw new Error('Method not implemented.');
  }
}
