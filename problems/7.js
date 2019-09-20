/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    while(x) {
        let end = x%10;
        result *= 10;
        result += end;
        x = Math.floor(x/10);
    }
    return result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));