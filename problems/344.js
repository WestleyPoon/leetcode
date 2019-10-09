/**
 * @param {char[]} s
 * @returns {void} Do not return anything, modify s in-place instead
 */
var reverseString = function(s) {
    let limit = Math.floor(s.length/2);
    for (let i = 0; i < limit; i++) {
        let temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }
};

console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["h","a","n","n","a","H"]));

// Easy
// Time: 116ms, beats 53.60%
// Memory: 46.7MB