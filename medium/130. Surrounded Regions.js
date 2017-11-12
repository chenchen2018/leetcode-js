/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board || !board.length || !board[0].length) {
        return;
    }
    var rows = board.length, cols = board[0].length;
    var father = [];
    var dx = [-1, 0, 1, 0], dy = [0, -1, 0, 1];

    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            if (board[row][col] === "O") {
                var position = convertToPosition(row, col);
                father[position] = position;
            }
        }
    }

    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            if (board[row][col] === "O") {
                connectToNeighbor(row, col);
            }
        }
    }

    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            if (board[row][col] === "O") {
                if (!isOnBoarder(find(convertToPosition(row, col)))) {
                    board[row][col] = "X";
                }
            }
        }
    }

    function connectToNeighbor(row, col) {
        for (var i = 0; i < dx.length; i++) {
            var newRow = row + dx[i], newCol = col + dy[i];
            if (isValid(newRow, newCol)) {
                connect(convertToPosition(row, col), convertToPosition(newRow, newCol));
            }
        }
    }

    function isValid(row, col) {
        if (row >= 0 && row < rows && col >= 0 && col < cols && board[row][col] === "O") {
            return true;
        }
        return false;
    }

    function connect(a, b) {
        var aFather = find(a), bFather = find(b);
        if (aFather !== bFather) {
            if (isOnBoarder(aFather)) {
                father[bFather] = aFather;
            } else {
                father[aFather] = bFather;
            }
        }
    }

    function convertToPosition(row, col) {
        return row * cols + col;
    }

    function isOnBoarder(position) {
        var row = Math.floor(position / cols), col = position % cols;
        return row === 0 || row === rows - 1 || col === 0 || col === cols - 1;
    }

    function find(a) {
        if (a === father[a]) {
            return a;
        }
        return father[a] = find(father[a]);
    }
};