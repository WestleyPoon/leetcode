/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (needle[0] === haystack[i]) {
            let match = true;
            for (let j = 1; j < needle.length; j++) {
                if (needle[j] !== haystack[i+j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return i;
            }
        }
    }

    return -1;
};

console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));