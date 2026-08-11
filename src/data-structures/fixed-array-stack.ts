class FixedArrayStack<T> {
  private length: number;
  private stack: T[];
  private idx: number = -1;

  constructor({ length }: { length: number }) {
    this.length = length;
    this.stack = new Array(length) as T[];
  }

  public isEmpty() {
    return this.idx <= -1 ? true : false;
  }

  public isFull() {
    return this.idx >= this.length - 1 ? true : false;
  }

  public push(item: T) {
    if (this.isFull()) {
      return;
    }

    this.idx++;
    this.stack[this.idx] = item;
  }

  public pop() {
    if (this.isEmpty()) {
      return;
    }

    const poppedValue = this.stack.at(this.idx);

    this.idx--;
    return poppedValue;
  }

  public peek() {
    if (this.isEmpty()) {
      return;
    }

    const peekValue = this.stack.at(this.idx);

    return peekValue;
  }
}

export { FixedArrayStack };
