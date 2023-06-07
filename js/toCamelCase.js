let toCamelCase

toCamelCase = str => {
  if (!str) return ''

  return str
    .split(/_|-/)
    .map((word, i) => (i === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join('')
}

toCamelCase = str => {
  // this works becaue the _|- match allows skips the first word
  return str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase())
}

toCamelCase('the-stealth-warrior')

toCamelCase('The_Stealth_Warrior')

toCamelCase('The_Stealth-Warrior')
