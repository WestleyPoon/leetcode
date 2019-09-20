/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    let negative = false;
    if (x<0) {
        negative = true;
    }
    while (x) {
        let end = Math.abs(x%10);
        result *= 10;
        result += end;
        x = Math.trunc(x/10);
    }
    if (negative) {
        return result * -1;
    }
    return result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));