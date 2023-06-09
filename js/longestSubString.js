/*
 * Given a string s, find the length of the longest substring without repeating characters.
 */

console.clear()

let lengthOfLongestSubstring

lengthOfLongestSubstring = s => {
  if (s.length === 0) return 0

  let l = 0,
    cnt = new Map(),
    longest = 1

  // starting from the left, move the right tracker to the right
  for (let r = 0; r < s.length; r++) {
    // inc the count of 'seen' for this current char
    let current = s[r]
    cnt.set(current, (cnt.get(current) || 0) + 1)

    // if > 1, this is a dupe, move the left counter until it passes that
    // letter in the string
    while (cnt.get(current) > 1) {
      cnt.set(s[l], cnt.get(s[l]) - 1)
      l++
    }

    longest = Math.max(longest, r - l + 1)
  }

  return Math.min(s.length, longest)
}

lengthOfLongestSubstring('abcabcbb') // 3 'abc'

lengthOfLongestSubstring('bbbbb') // 1 'b'

lengthOfLongestSubstring('pwwkew') // 3 'wke'

lengthOfLongestSubstring('qwerty') // 5 'qwerty'

lengthOfLongestSubstring('au') // 2 'au'
