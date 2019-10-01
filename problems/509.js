/**
 * @param {number} N
 * @returns {number}
 */
var fib = function(N) {
    if (N < 2) {
        return N;
    }

    // return fib(N-1) + fib(N-2);

    let two = 0;
    let one = 1;
    let sum = 0;
    let counter = N - 2;

    while (N) {
        two = one;
        one = two + one;
        N--;
    }

    return two + one;
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));

// Easy
// Time: 80ms, beats 14.17%
// Memory: 34.2MB