/*

Number of Ways to Make Change

Given an array of distinct positive integers representing coin 
denominations and a single non-negative integer n representing 
a target amount of money, write a function that returns the 
number of ways to make change for that target amount using the 
given coin denominations

Note that an unlimited amount of coins is at your disposal.

Sample Input
n = 6
denoms = [1, 5]

Sample Output
2 // 1x1 + 1x5 and 6x1

*/

let makeChange

makeChange = (target, coins) => {
  return coins.map(c => {
    return Math.floor(target / c)
  })
}

// TESTS --------------

makeChange(6, [1, 5])

makeChange(6, [1, 5]) === 2

makeChange(0, [2, 3, 4, 7])

makeChange(0, [2, 3, 4, 7]) === 1

makeChange(25, [1, 5, 10, 25])

makeChange(25, [1, 5, 10, 25]) === 13
