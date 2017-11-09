/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};  //key: number, val: index
    for (var index = 0; index < nums.length; index++) {
        if (hash[target - nums[index]] === undefined) {
            hash[nums[index]] = index;
        } else {
            return [hash[target - nums[index]], index];
        }
    }
    return [];
};