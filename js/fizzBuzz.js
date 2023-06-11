let fizzBuzz

fizzBuzz = (count, fizzDiv = 3, buzzDiv = 5) => {
  let ret = []

  while (ret.length < count) {
    let r = '',
      i = ret.length + 1

    if (i % fizzDiv === 0) r += 'Fizz'
    if (i % buzzDiv === 0) r += 'Buzz'
    if (r.length === 0) r = i.toString()

    ret.push(r)
  }

  return ret
}

fizzBuzz(3)

fizzBuzz(100)
