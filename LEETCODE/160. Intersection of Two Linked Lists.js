/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  currentFirst = headA;
  currentSecond = headB;

  while (currentFirst.next || currentSecond.next) {
    if (currentFirst.next && currentSecond.next) {
      if (currentFirst.isRepeat) return currentFirst;
      currentFirst.isRepeat = true;
      if (currentSecond.isRepeat) return currentSecond;
      currentSecond.isRepeat = true;
      currentFirst = currentFirst.next;
      currentSecond = currentSecond.next;
    }
    if (currentFirst.next) {
      if (currentFirst.isRepeat) return currentFirst;
      currentFirst.isRepeat = true;
      currentFirst = currentFirst.next;
    }
    if (currentSecond.next) {
      if (currentSecond.isRepeat) return currentSecond;
      currentSecond.isRepeat = true;
      currentSecond = currentSecond.next;
    }
  }
  if (currentFirst && currentSecond) {
    if (currentFirst.isRepeat) return currentFirst;
    currentFirst.isRepeat = true;
    if (currentSecond.isRepeat) return currentSecond;
    currentSecond.isRepeat = true;
  }
  return null;
};
