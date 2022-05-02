const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
  
  if (l.value) checkObj(l);

  function checkObj(l) {
    // console.log(l);
    if (l.value === k) removeOne(l);
    if (l.next === null) {
      return l;
    } else {
      if (l.next.value === k) {
        remove(l)
      } else {
        checkObj(l.next);
      } 
    }
  }

  function removeOne(node) {
    node.value = node.next.value;
    node.next = node.next.next;
    checkObj(l);
  }

  function remove(node) {
    (node.next.next) ? node.next = node.next.next : node.next = null;
    checkObj(node);
  }
  return l;
}

module.exports = {
  removeKFromList
};
