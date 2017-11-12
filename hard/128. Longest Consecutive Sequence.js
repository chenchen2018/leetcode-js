/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums || !nums.length) {
        return 0;
    }
    var set = {};
    for (var i in nums) {
        set[nums[i]] = 1;
    }
    var maxLength = -Infinity;
    for (var i = 0; i < nums.length; i++) {
        var curr = nums[i];
        if (set.hasOwnProperty(curr)) {
            var down = curr - 1;
            while (set.hasOwnProperty(down)) {
                delete set[down];
                down--;
            }
            var up = curr + 1;
            while (set.hasOwnProperty(up)) {
                delete set[down];
                up++;
            }
            maxLength = Math.max(maxLength, up - down - 1);
            delete set[curr];
        }
    }
    return maxLength;
};