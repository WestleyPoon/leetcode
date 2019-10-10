/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const numCount = {};
    const floor = Math.floor(nums.length / 2);

    for (let i = 0; i < nums.length; i++) {
        if (numCount[nums[i]]) {
            numCount[nums[i]] += 1;
        } else {
            numCount[nums[i]] = 1;
        }
    }

    const numsSeen = Object.keys(numCount);
    for (let i = 0; i < numsSeen.length; i++) {
        if (numCount[numsSeen[i]] > floor) {
            return parseInt(numsSeen[i]);
        }
    }

    return null;
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));

// Easy
// Time: 52ms, beats 97.99%
// Memory: 37.8MB, beats 28.57%