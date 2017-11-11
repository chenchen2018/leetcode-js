/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var res = [];
    for (var row = 0; row < numRows; row++) {
        var temp = [];
        res.push(temp);
        for (var col = 0; col <= row; col++) {
            if (col === 0 || col === row) {
                temp.push(1);
            } else {
                temp.push(res[row - 1][col - 1] + res[row - 1][col]);
            }
        }
    }
    return res;
};