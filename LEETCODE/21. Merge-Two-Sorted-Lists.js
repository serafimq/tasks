// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Input: list1 = [], list2 = []
// Output: []
// Input: list1 = [], list2 = [0]
// Output: [0]


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


// its only array resolve
const mergeTwoLists = function (list1, list2) {
    if (!list1.length && !list2.length) return [];
    if (!list1.length) return list2;
    if (!list2.length) return list1;

    let result = [];

    while (list1.length || list2.length) {
        if (!list1.length) {
            result.push(...list2);
            list2.length = 0;
            return result;
        }
        if (!list2.length) {
            result.push(...list1);
            list1.length = 0;
            return result;
        }

        if (list1[0] > list2[0]) {
            result.push(list1.shift())
        } else {
            result.push(list2.shift())
        }
    }
};

//const list1 = [1,2,4], list2 = [1,3,4]

//console.log(mergeTwoLists(list1,list2), '==> 1, 1, 2, 3, 4, 4');

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const mergeTwoLinkedLists = function (list1, list2) {
    const list = new ListNode(-101);
    let prev = list;

    while(list1 && list2) {
        if (list1.val > list2.val) {
            prev.next = list1;
            prev = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            prev = list2;
            list2 = list2.next;
        }
    }

    if (!list1) prev.next = list2;
    if (!list2) prev.next = list1;

    return list.next;
}