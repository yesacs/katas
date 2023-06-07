let twoSum

//sliding window version -- SLOW

twoSum = (nums, target) => {
  let l = 0

  while (l < nums.length) {
    let r = nums.length

    while (r > l) {
      if (target === nums[l] + nums[r]) return [l, r]
      r--
    }

    l++
  }
}

// hash table version
//

twoSum = (nums, target) => {
  let hashTable = {}

  for (let l = 0; l < nums.length; l++) {
    // if the value need to satify the target is known to the hash table, you're
    // done!

    if (hashTable[target - nums[l]] !== undefined)
      return [hashTable[target - nums[l]], l]

    hashTable[nums[l]] = l
  }
}

twoSum([2, 7, 11, 15], 9)

twoSum([3, 2, 4], 6)

twoSum([3, 3], 6)

twoSum([-3, 4, 3, 90], 0)

twoSum([1, 3, 4, 2], 6)
