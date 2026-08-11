type NodeType<T> = ListNode<T> | null;

class ListNode<T = number> {
  public val: T;
  public next: NodeType<T>;

  constructor({ next, val }: { val: T; next: NodeType<T> }) {
    this.next = next;
    this.val = val;
  }
}

class LinkedList<T> {
  private head: NodeType<T> = null;
  private tail: NodeType<T> = null;
  private length: number = 0;

  private initiateList(val: T) {
    const newNode = new ListNode({ val, next: null });

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
      result.push(node.val);

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

  public insertHead(val: T) {
    if (this.isEmpty()) {
      this.initiateList(val);
      return;
    }

    const newHead = new ListNode({ val, next: this.head });

    this.head = newHead;
    this.length++;
  }

  public insertTail(val: T) {
    if (this.isEmpty()) {
      this.initiateList(val);
      return;
    }

    const newTail = new ListNode({ val, next: null });

    this.tail!.next = newTail;
    this.tail = newTail;
    this.length++;
  }

  public insertAt(position: number, val: T) {
    if (this.isEmpty()) {
      this.initiateList(val);
      return;
    }

    if (position === 1) {
      // console.warn("Cannot place as a head node, use `insertHead` instead!");
      return;
    }

    if (position <= 0) {
      // console.warn("Invalid Position!");
      return;
    }

    if (position > this.length) {
      // console.warn("Invalid Position!");
      return;
    }

    let prevNode = this.head;

    for (let i = 1; i < position - 1; i++) {
      prevNode = prevNode!.next;
    }

    const currentNode = prevNode!.next;

    const newNode = new ListNode({ val, next: currentNode });

    prevNode!.next = newNode;
  }

  public has(val: T) {
    if (this.isEmpty()) return false;

    let node = this.head;

    while (node !== null) {
      if (node.val === val) {
        return true;
      }

      node = node.next;
    }

    return false;
  }

  // public delete(val: T) {
  //   if (this.isEmpty()) return;
  // }
}

export { LinkedList, ListNode };
