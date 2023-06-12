// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

let sieve

sieve = bound => {
  let ledger = new Array(bound).fill(true), // the primes
    max = Math.sqrt(bound), // use as optimization
    start = 2, //the starting value
    muti = 2 // the multiplier to check

  // go through multiples of each known prime and mark as not prime
  while (start <= max) {
    if (start * muti >= bound) {
      // if we're passed the bound, reset the mutlplier
      muti = 2

      // then inc start and find the next avialable prime
      start += 1
      while (start < max && !ledger[start]) {
        start += 1
      }
    } else {
      // otherwise, mark the number as not prime and inc the multiplier
      ledger[start * muti] = false
      muti += 1
    }
  }

  return ledger.reduce((acc, k, i) => {
    if (k && i > 1) acc.push(i) // if prime and not 0 or 1
    return acc
  }, [])
}

sieve(121)

sieve(10).length

sieve(12121)

// not mine
let countPrimes = function (n) {
  if (n < 3) return 0

  const count = new Uint8Array(n)
  let res = 1

  for (let i = 3; i < n; i += 2) {
    if (!count[i]) {
      res++
      for (let j = i * i; j < n; j += 2 * i) {
        count[j] = 1
      }
    }
  }

  return res
}

countPrimes(10)
