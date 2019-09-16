var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i+1; j< nums.length; j++) {
            if (nums[i] +nums[j] === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));

// Time: 116ms, beats 33.71%
// Memory: 34.7MB, beats 55.79%