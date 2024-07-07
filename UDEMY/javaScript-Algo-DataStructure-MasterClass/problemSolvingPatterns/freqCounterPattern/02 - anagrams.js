/**
 * FREQUENCY COUNTER PATTERNS:
 * this pattern uses objects or sets to collect values/frequencies of values
 * this can often avoid the need for nested loops os 0(N^2) operations with arrays and strings
 */

// Example 2, Anagram
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or a name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2){

    if(str1.length !== str2.length) return false;

    const lookup = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        // if letter exists in lookup object, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        // if cant find letter in the lookup obj or letter is zero then it's not an anagram
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1
        }
    }
    return true
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('rat', 'car')) // false // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
