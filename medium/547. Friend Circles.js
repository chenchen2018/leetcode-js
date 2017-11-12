/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
    if (!M || !M.length) {
        return 0;
    }

    var father = [];
    var circles = M.length;

    for (var index = 0; index < M.length; index++) {
        father[index] = index;
    }

    for (var row = 0; row < M.length; row++) {
        for (var col = 0; col < row; col++) {
            if (M[row][col] === 1) {
                var aFather = find(row), bFather = find(col);
                if (aFather !== bFather) {
                    circles--;
                    father[aFather] = bFather;
                }
            }
        }
    }

    return circles;

    function find(a) {
        if (a === father[a]) {
            return a;
        }
        return father[a] = find(father[a]);
    }
};