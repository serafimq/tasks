// https://leetcode.com/problems/linked-list-cycle-ii/?envType=study-plan&id=level-1
// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
// Do not modify the linked list.
// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.
// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

// my error resolve
const detectCycle = function(head) {
    let currentNode = head;
    let indexNode = 0;
    const hashValue = {};
    const hashIndex = {};

    while (currentNode) {
        hashValue[currentNode.val] = hashValue[currentNode.val] + 1 || 1;
        hashIndex[currentNode.val] = indexNode
        if (hashValue[currentNode.val] === 2) return hashIndex[currentNode.val];
        currentNode = currentNode.next;
        indexNode += 1;
    }
    return -1;
};

// good resolve
var detectCycle2 = function(head) {
    if (!head || !head.next) return null;
    let fast = head;
    let slow = head;
    let pointer = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (slow === fast) break;
    }

    if (fast !== slow) return null;
    while (pointer !== slow) {
        pointer = pointer.next;
        slow = slow.next;
    }

    return slow;
};