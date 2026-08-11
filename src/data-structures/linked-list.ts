type NodeType<T> = Node<T> | null;

class Node<T> {
  public value: T;
  public next: NodeType<T>;

  constructor({ next, value }: { value: T; next: NodeType<T> }) {
    this.next = next;
    this.value = value;
  }
}

class LinkedList<T> {
  private head: NodeType<T> = null;
  private tail: NodeType<T> = null;
  private length: number = 0;

  private initiateList(value: T) {
    const newNode = new Node({ value, next: null });

    this.head = newNode;
    this.tail = newNode;
    this.length++;
  }

  constructor(options?: { headValue: T }) {
    if (!options) return;

    this.initiateList(options.headValue);
  }

  public traverse() {
    if (this.isEmpty()) return;

    const result = [];

    let node = this.head;

    while (node !== null) {
      result.push(node.value);

      node = node.next;
    }

    return result.join(" -> ");
  }

  public getHead() {
    return this.head;
  }

  public getTail() {
    return this.tail;
  }

  public getLength() {
    return this.length;
  }

  public isEmpty() {
    return this.head === null || this.tail === null || this.length <= 0;
  }

  public insertHead(value: T) {
    if (this.isEmpty()) {
      this.initiateList(value);
      return;
    }

    const newHead = new Node({ value, next: this.head });

    this.head = newHead;
    this.length++;
  }

  public insertTail(value: T) {
    if (this.isEmpty()) {
      this.initiateList(value);
      return;
    }

    const newTail = new Node({ value, next: null });

    this.tail!.next = newTail;
    this.tail = newTail;
    this.length++;
  }

  public insertAt(position: number, value: T) {
    if (this.isEmpty()) {
      this.initiateList(value);
      return;
    }

    if (position === 1) {
      console.warn("Cannot place as a head node, use `insertHead` instead!");
      return;
    }

    if (position <= 0) {
      console.warn("Invalid Position!");
      return;
    }

    if (position > this.length) {
      console.warn("Invalid Position!");
      return;
    }

    let prevNode = this.head;

    for (let i = 1; i < position - 1; i++) {
      prevNode = prevNode!.next;
    }

    const currentNode = prevNode!.next;

    const newNode = new Node({ value, next: currentNode });

    prevNode!.next = newNode;
  }

  public has(value: T) {
    if (this.isEmpty()) return false;

    let node = this.head;

    while (node !== null) {
      if (node.value === value) {
        return true;
      }

      node = node.next;
    }

    return false;
  }

  // public delete(value: T) {
  //   if (this.isEmpty()) return;
  // }
}

export default LinkedList;
