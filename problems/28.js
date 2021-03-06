/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") {
        return 0;
    }

    for (let i = 0; i < haystack.length; i++) {
        if (needle[0] === haystack[i]) {
            if (haystack.slice(i,i+needle.length) === needle) {
                return i;
            }
        }
    }

    return -1;
};

console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));

// Easy
// Time: 56ms, beats 66.65%
// Memory: 36.1MB, beats 10.72%