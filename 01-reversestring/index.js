// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split('').reverse().join('')
// }

//SOLUTION: WITHOUT THE '.reverse()' HELPER
// function reverse(str) {
//    let reversed = ''
//    for (let i = str.length-1; i >= 0; i--){
//     reversed  += str[i]
//    }
//    return reversed
// }

//SOLUTION: USING THE'.reduce()' HELPER
function reverse(str) {
    debugger;
    return str.split('').reduce((reversed, char)=> {
        return char + reversed;
    }, '')
 }
module.exports = reverse;
