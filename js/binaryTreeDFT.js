// https://leetcode.com/problems/binary-tree-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

let inorderTraversal, tree

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))

// In-Order traversal is ""left-root-right"-order", so we always add
// the most left node which is left (and has no left children)

// recursive solution
inorderTraversal = root => {
  if (!root) return []

  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ]
}

// iterative solution
inorderTraversal = root => {
  let stack = [],
    ret = [],
    current = root

  while (current || stack.length) {
    if (current) {
      // if current is valid, push it to the stack to look at later
      stack.push(current)
      // if current has a left node, set that as the new current to go deeper on
      // the next iteration
      current = current.left
    } else {
      //otherwise, let's look at the stack and save the value
      current = stack.pop()
      ret.push(current.val)

      // set the new current to the right node regardless of validity
      current = current.right
    }
  }

  return ret
}

inorderTraversal(tree)

inorderTraversal()

console.log(tree)
