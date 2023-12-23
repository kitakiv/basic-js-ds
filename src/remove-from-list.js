const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let head = l;
  function remove(position) {
    let current = head;

    if (position === 0) {
      head = current.next;
    } else {
      let prew = head;
      let index = 0;

      while (index < position) {
        prew = current;
        current = current.next;
        index += 1;
      }
      if (!current.next) {
      	prew.next = null;
      } else {
      	prew.next = current.next
      }
    }
    return head;
  }

  function indexOf(element) {
    let current = head;
    let index = 0;
    let double = 0;

    while(current) {
      if (current.value === element) {
        remove(index - double);
         console.log(index)
         console.log(head)
         double += 1
      }

      current = current.next;
      index += 1;
      /* console.log(index) */
    }

    return head;
  }

  return indexOf(k);
}

module.exports = {
  removeKFromList
};
