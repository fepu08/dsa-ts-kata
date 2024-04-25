declare type Point = {
  x: number;
  y: number;
};

export class ListNode<T> {
  public value: T;
  public next?: ListNode<T>;
}

export class DListNode<T> {
  public value: T;
  public next?: DListNode<T>;
  public prev?: DListNode<T>;
}

declare interface List<T> {
  get length(): number;
  removeAt(index: number): T | undefined;
  remove(item: T): T | undefined;
  get(index: number): T | undefined;
  getAt(index: number): T | undefined;
  prepend(item: T): void;
  append(item: T): void;
  insertAt(item: T, idx: number): void;
}

export class BinaryNode<T> {
  public value: T;
  public left: BinaryNode<T> | null;
  public right: BinaryNode<T> | null;
}
