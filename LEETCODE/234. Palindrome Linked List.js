/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head.val === undefined) return false;
  if (head.next === undefined) return true;
  let current = head;
  const resultArray = [];

  while (current !== null) {
    resultArray.push(current.val);
    current = current.next;
  }
  return resultArray.join('') === [...resultArray].reverse().join('');

};


// is not my resolve 
var isPalindrome2 = function (head) {
  let slow = head;
  let fast = head;

  // Find the middle of the linked list
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  // Compare the first half with the reversed second half
  while (prev) {
    if (prev.val !== head.val) {
      return false;
    }
    prev = prev.next;
    head = head.next;
  }

  return true;
};
