//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!haystack || !needle) return -1

  for (let h = 0; h < haystack.length; h += 1) {
    let hi = h,
      ni = 0

    while (needle[ni] === haystack[hi]) {
      ni += 1
      hi += 1

      if (ni === needle.length) return h
    }
  }

  return -1
}

strStr('sadbutsad', 'sad') // 0

strStr('sadbutsad', 'but') // 3

strStr('leetcode', 'leeto') // -1
