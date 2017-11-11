/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var res = [];
    var carry = 1;
    for (var index = digits.length - 1; index >= 0; index--) {
        carry += digits[index];
        if (carry === 10) {
            res.unshift(0);
            carry = 1;
        } else {
            res.unshift(carry);
            carry = 0;
        }
    }
    if (carry) {
        res.unshift(carry);
    }
    return res;
};