const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Object {
  constructor(elem) {
    this.value = elem;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(element) {
    if (this.length === 0) {
      this.head = new Object(element);
    } else {
      let current = this.head;
      this.head = new Object(element);
      this.head.next = current;
    }

    this.length++;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    this.head = current.next;
    return current.value;
  }

  peek() {
    return this.head.value;
  }
}

module.exports = {
  Stack
};
