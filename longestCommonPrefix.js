// https://leetcode.com/problems/longest-common-prefix/

/**
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

* @param {string[]} strs
* @return {string}
*/

let longestCommonPrefix

longestCommonPrefix = strs => {
  if (strs.length === 0) return ''

  let match = ''

  // don't use the length of the first, use the length of the shortest (or bail
  // on undefined
  for (let l = 0; l < strs[0].length; l++) {
    let test = strs[0][l]

    for (let i = 1; i < strs.length; i++) {
      if (!strs[i][l] || strs[i][l] !== test) return match
    }

    match = match + test
  }

  return match
}

longestCommonPrefix(['flower', 'flow', 'flight'])

longestCommonPrefix(['dog', 'racecar', 'car'])

longestCommonPrefix([''])

/*
 *
 * the max length of the prefix will be the length of the shortest string in strs (but do we care?)
 *
 * prefix means we wont need to inc l, just r (or just use one pointer)
 *
 */

'flower'.match('xx')

'flower'.substring

new RegExp('$flow', 'g')
