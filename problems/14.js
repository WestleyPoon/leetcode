/**
 * @param {string[]} strs
 * @returns {string}
 */
var longestCommonPrefix = function(strs) {
    let match = true;
    if (strs[0]) {
        const firstChar = strs[0][0];
        for (let i = 1; i < strs.length; i++) {
            if (strs[i] === "" || firstChar !== strs[i][0]) {
                match = false;
                break;
            }
        }
    }

    if (match) {
        return `${firstChar}` + longestCommonPrefix(strs.map((str) => {
            return str.slice(1);
        }));
    }
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));

// Easy
// Time: 56ms, beats 79.67%
// Memory: 36.3ms