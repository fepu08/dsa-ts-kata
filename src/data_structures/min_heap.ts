export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number | undefined {
    if (this.length === 0) {
      return undefined;
    }

    const out = this.data[0];
    this.length--;
    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    this.heapifyDown(0);
    return out;
  }

  private heapifyDown(index: number): void {
    const lIndex = this.leftChild(index);
    const rIndex = this.rightChild(index);

    if (index >= this.length || lIndex >= this.length) {
      return;
    }

    const lValue = this.data[lIndex];
    const rValue = this.data[rIndex];
    const v = this.data[index];

    if (lValue > rValue && v > rValue) {
      this.data[index] = rValue;
      this.data[rIndex] = v;
      this.heapifyDown(rIndex);
    } else if (rValue > lValue && v > lValue) {
      this.data[index] = lValue;
      this.data[lIndex] = v;
      this.heapifyDown(lIndex);
    }
  }

  private heapifyUp(index: number): void {
    if (index === 0) {
      return;
    }

    const p = this.parent(index);
    const parentValue = this.data[p];
    const v = this.data[index];

    if (parentValue > v) {
      this.data[index] = parentValue;
      this.data[p] = v;
      this.heapifyUp(p);
    }
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number): number {
    return index * 2 + 1;
  }

  private rightChild(index: number): number {
    return index * 2 + 2;
  }
}
