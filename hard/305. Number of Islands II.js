/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
    if (!m || !n || !positions || !positions.length) {
        return 0;
    }
    var father = [];
    var islands = 0;
    var appreared = {};
    var res = [];
    for (var row = 0; row < m; row++) {
        for (var col = 0; col < n; col++) {
            var position = convertToPosition(row, col);
            father.push(position);
        }
    }
    var dx = [-1, 0, 1, 0], dy = [0, -1, 0, 1];
    for (var i in positions) {
        var row = positions[i][0], col = positions[i][1];
        islands++;
        appreared[convertToPosition(row, col)] = 1;
        for (var i = 0; i < dx.length; i++) {
            var newRow = row + dx[i], newCol = col + dy[i];
            if (isValid(newRow, newCol)) {
                var currFather = find(convertToPosition(row, col));
                var neighborFather = find(convertToPosition(newRow, newCol));
                if (currFather !== neighborFather) {
                    islands--;
                    father[currFather] = neighborFather;
                }
            }
        }
        res.push(islands);
    }
    return res;

    function isValid(row, col) {
        if (row < 0 || col < 0 || row >= m || col >= n) {
            return false;
        }
        if (!appreared.hasOwnProperty(convertToPosition(row, col))) {
            return false;
        }
        return true;
    }

    function find(a) {
        if (father[a] === a) {
            return a;
        }
        return father[a] = find(father[a]);
    }

    function convertToPosition(row, col) {
        return row * n + col;
    }
};