// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// function palindrome(str) {
//    let reverse = str.split('').reverse().join('')
// //    if (reverse === str){
// //     return true
// //    }
// //    return false

// //SHORT FORM
//     return str === reverse;
// }
//USING '.every() ARRAY HELPER
function palindrome(str) {
    return str.split('').every((char, i)=> {
        return char === str[str.length - i - 1]
    });
}

module.exports = palindrome;
