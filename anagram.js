/*

https://leetcode.com/problems/valid-anagram/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*/

let isAnagram

isAnagram = (s, t) => {
  if (s.length !== t.length) return false

  // this is slow
  let si = s.split('').sort(),
    ti = t.split('').sort()

  return si.every((_, i) => si[i] == ti[i])
}

isAnagram = (s, t) => {
  // this is WAY slow
  if (s.length !== t.length) return false

  let hashTable = new Map()

  for (let i = 0; i < s.length; i++) {
    hashTable.set(s[i], (hashTable.get(s[i]) || []).concat(i))
  }

  for (let i = 0; i < s.length; i++) {
    let test = hashTable.has(t[i]) && hashTable.get(t[i])

    if (!test) return false
    test.shift()

    if (test.length === 0) hashTable.delete(t[i])
  }

  return hashTable.size === 0
}

isAnagram = (s, t) => {
  if (s.length !== t.length) return false

  let hashTable = new Map()

  for (let i = 0; i < s.length; i++) {
    let si = s[i],
      ti = t[i]

    if (si === ti) break
    ;[si, ti].forEach(c => {
      hashTable.set(c, (hashTable.get(c) || 2) - 1)
      if (hashTable.get(c) === 0) hashTable.delete(c)
    })
  }

  return hashTable.size === 0
}

isAnagram('anagram', 'nagaram')

isAnagram('dog', 'cat')

isAnagram('ccac', 'aacc')

isAnagram('aa', 'bb')

'?'.match(/[A-Za-z0-9]/)
