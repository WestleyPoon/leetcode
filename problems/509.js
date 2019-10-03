/**
 * @param {number} N
 * @returns {number}
 */
var fib = function(N) {
    const nums = {
        0: 0,
        1: 1
    }

    for (let i = 2; i <= N; i++) {
        nums[i] = nums[i-1] + nums[i-2];
    }

    return nums[N];
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));

// Easy
// Time: 48ms, beats 91.83%
// Memory: 33.8MB