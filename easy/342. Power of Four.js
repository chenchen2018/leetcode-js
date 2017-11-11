/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    for (var position = 1; position <= 32; position++) {
        if (num & 1) {
            if (position % 2 === 0) {
                return false;
            }
            return (num >> 1) === 0;
        }
        num >>= 1;
    }
    return false;
};