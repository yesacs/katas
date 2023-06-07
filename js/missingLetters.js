/*

Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

*/

let findMissingLetter

findMissingLetter = input => {
  let array = input, //.sort(),
    l = 0,
    r = array.length - 1

  while (l < r) {
    if (array[l].charCodeAt() + 1 !== array[l + 1].charCodeAt()) {
      return String.fromCharCode(array[l].charCodeAt() + 1)
    }

    if (array[r].charCodeAt() - 1 !== array[r - 1].charCodeAt()) {
      return String.fromCharCode(array[r].charCodeAt() - 1)
    }

    l++
    r--
  }
}

findMissingLetter(['a', 'b', 'c', 'd', 'f'])

findMissingLetter(['O', 'Q', 'R', 'S'])

findMissingLetter(['f', 'g', 'h', 'i', 'k', 'l', 'm'])

'b'.charCodeAt(0)

String.fromCharCode(98)

console.clear()
