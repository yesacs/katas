let longestPalindrome, isPalindrome

isPalindrome = ss => {
  let l = 0,
    r = ss.length - 1

  while (l < r) {
    if (ss[l] !== ss[r]) return false
    l++, r--
  }

  return true
}

longestPalindrome = s => {
  let ss = s.replaceAll(/[^a-z0-9]/gi, '').toLowerCase(),
    l = 0,
    r = 0,
    longest = ''

  while (r <= ss.length) {
    let test = ss.substring(l, r),
      pass = isPalindrome(test),
      isLonger = test.length > longest.length

    console.log({ l, r, test, pass, isLonger, longest })

    if (!isLonger || !pass) l = Math.max(0, r - longest.length)
    if (isLonger && pass) longest = test

    r++
  }

  return longest
}

longestPalindrome('racecar') // racecar

longestPalindrome('thisracecarisa') // racecar

longestPalindrome('thisracecarsiht') // thisracecarsiht

longestPalindrome('racecarbbbbbbbbbbbbbbbb') // bbbbbbbbbbbbbbb
