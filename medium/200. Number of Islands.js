/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || !grid.length || !grid[0].length) {
        return 0;
    }

    var rows = grid.length, cols = grid[0].length;
    var father = [];
    var components = 0;

    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            if (grid[row][col] === "1") {
                var position = convertToPosition(row, col);
                father[position] = position;
                components++;
            }
        }
    }

    var dx = [-1, 0, 1, 0], dy = [0, -1, 0, 1];

    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            if (grid[row][col] === "1") {
                connectToNeighbors(row, col);
            }
        }
    }

    return components;

    function connectToNeighbors(row, col) {
        for (var i = 0; i < dx.length; i++) {
            var newRow = row + dx[i], newCol = col + dy[i];
            if (isValid(newRow, newCol)) {
                connect(convertToPosition(row, col), convertToPosition(newRow, newCol));
            }
        }
    }

    function convertToPosition(row, col) {
        return row * cols + col;
    }

    function isValid(row, col) {
        if (row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] === "1") {
            return true;
        }
        return false;
    }

    function find(a) {
        if (a === father[a]) {
            return a;
        }
        return father[a] = find(father[a]);
    }

    function connect(a, b) {
        var aFather = find(a), bFather = find(b);
        if (aFather !== bFather) {
            father[aFather] = bFather;
            components--;
        }
    }
};