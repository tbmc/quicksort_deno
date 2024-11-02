export class Node<T> {
  next: Node<T> | null = null;

  constructor(public value: T) {}
}

export class Queue<T> {
  first: Node<T> | null = null;
  last: Node<T> | null = null;
  size = 0;

  add(value: T) {
    const newNode = new Node(value);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  pop(): T | null {
    if (!this.first) return null;

    const returnValue = this.first.value;
    if (this.first === this.last) this.last = null;

    this.first = this.first.next;
    this.size--;

    return returnValue;
  }

  has() {
    return this.size !== 0;
  }
}
