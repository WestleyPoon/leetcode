/**
 * @param {number} N
 * @returns {number}
 */
var fib = function(N) {
    if (N < 2) {
        return N;
    }

    // return fib(N-1) + fib(N-2);

    let n1 = 0;
    let n2 = 0;

    N = (N - 2);
    while (N-- > 0) {
        let new1 = n1 + n2;
        n2 = n2;
        n1 = new1;
    }

    return n1 + n2;
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));

// Easy
// Time: 80ms, beats 14.17%
// Memory: 34.2MB