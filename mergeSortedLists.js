// https://leetcode.com/problems/merge-two-sorted-lists/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

let list1, list2, mergeTwoLists

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

mergeTwoLists = (l1, l2) => {
  let ret = new ListNode(),
    current = ret

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }

    current = current.next
  }

  current.next = l1 || l2

  return ret.next
}

list1 = new ListNode(1, new ListNode(2, new ListNode(4)))

list2 = new ListNode(1, new ListNode(3, new ListNode(4)))

mergeTwoLists(list1, list2)
