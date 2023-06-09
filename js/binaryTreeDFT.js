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
  // 1 add the root val
  // 2 add the left side vals
  // 3 add the right vals
}

inorderTraversal(tree)

inorderTraversal()

console.log(tree)
