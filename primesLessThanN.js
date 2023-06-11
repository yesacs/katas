let findPrimes, isPrime

isPrime = n => {
  if (n === 1) return false

  if (n <= 3) return true

  if (n % 2 === 0 || n % 3 === 0) return false

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0) return false
  }

  return true
}

isPrime(1)

isPrime(2)

isPrime(7)

isPrime(37)

isPrime(36)

isPrime(1000000)

findPrimes = (n, i = 0) => {
  let ret = []

  for (i; i < n; i++) {
    if (isPrime(i)) ret.push(i)
  }

  return ret
}

findPrimes(10000)
