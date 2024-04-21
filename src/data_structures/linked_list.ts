interface LinkedListInterface<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}

export class ListNode<T> {
  public value: T;
  public nextNode?: ListNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}

export class DListNode<T> {
  public value: T;
  public nextNode?: DListNode<T>;
  public prevNode?: DListNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> implements LinkedListInterface<T> {}

class DLinkedList<T> implements LinkedListInterface<T> {}
