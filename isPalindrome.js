let isPalindrome, isAlphaNumeric

isAlphaNumeric = s => s && !!s.match(/[A-Za-z0-9]/)

isPalindrome = s => {
  let l = 0,
    r = s.length - 1

  while (l < r) {
    while (l < r && !isAlphaNumeric(s[l])) l++
    while (r > l && !isAlphaNumeric(s[r])) r--

    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false

    l++, r--
  }
  return true
}

isPalindrome = s => {
  let l = 0,
    ss = s.replaceAll(/[^a-z0-9]/gi, '').toLowerCase(),
    r = ss.length - 1

  while (l < r) {
    if (ss[l] !== ss[r]) return false
    l++, r--
  }

  return true
}

isPalindrome('racecar')

isPalindrome('raceacar')

isPalindrome('A man, a plan, a canal: Panama')

isPalindrome('.,')

'A man'.match(/[a-zA-Z0-9]/)

','.match(/[a-zA-Z0-9]/)
