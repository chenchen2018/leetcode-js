/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || !nums.length) {
        return 0;
    }
    if (nums.length < 2) {
        return nums[0];
    }
    var robArray1 = [], robArray2 = [];
    robArray1.push(nums[0]);
    robArray1.push(nums[0]);
    robArray2.push(0);
    robArray2.push(nums[1]);
    for (var index = 2; index < nums.length; index++) {
        robArray1.push(Math.max(robArray1[index - 2] + nums[index], robArray1[index - 1]));
        robArray2.push(Math.max(robArray2[index - 2] + nums[index], robArray2[index - 1]));
    }
    return Math.max(robArray1.pop(), robArray2.pop());
};