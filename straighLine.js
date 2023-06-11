/*

https://leetcode.com/problems/check-if-it-is-a-straight-line/

You are given an array coordinates, coordinates[i] = [x, y], 
where [x, y] represents the coordinate of a point. Check if 
these points make a straight line in the XY plane.

*/

let checkStraightLine

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
checkStraightLine = (coords = []) => {
  if (!coords.length) return false

  let slope = null,
    l = 0

  while (l < coords.length - 1) {
    let p1 = coords[l],
      p2 = coords[l + 1],
      top = p2[1] - p1[1],
      bot = p2[0] - p1[0],
      thisSlope = bot !== 0 ? top / bot : undefined

    if (slope === null) slope = thisSlope
    if (thisSlope !== slope) return false

    l++
  }

  return true
}

checkStraightLine([
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
])

checkStraightLine([
  [0, 0],
  [0, 1],
  [0, -1],
])

checkStraightLine([
  [0, 0],
  [0, 5],
  [5, 5],
  [5, 0],
])

checkStraightLine([
  [0, 1],
  [1, 3],
  [-4, -7],
  [5, 11],
])

checkStraightLine([
  [1, 2],
  [2, 4],
  [3, 4],
  [4, 8],
  [5, 6],
  [6, 7],
])
