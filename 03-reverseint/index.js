// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


//SOLUTION: USING 'toString', 'parseInt' , Math.sign()
function reverseInt(n) {
    let reversedNum = n.toString().split('').reverse().join('')

  return parseInt(reversedNum) * Math.sign(n)

}

module.exports = reverseInt;
