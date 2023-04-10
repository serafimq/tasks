/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  // let fast = head;
  // let slow = head;

  // while (fast && fast.next) {
  //   fast = fast.next.next;
  //   slow = slow.next;

  //   if (slow === fast) return true;
  // }

  let current = head;
  while (current !== null) {
    if (current.isRepeat) return true;
    current.isRepeat = true
    current = current.next;
  }

  return false;
};
