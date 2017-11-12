/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if (!n || !edges) {
        return false;
    }
    var father = [];
    for (var i = 0; i < n; i++) {
        father[i] = i;
    }
    for (var index in edges) {
        var a = edges[index][0], b = edges[index][1];
        var aFather = find(a), bFather = find(b);
        if (aFather === bFather) {
            return false;
        }
        if (aFather < bFather) {
            father[bFather] = aFather;
        } else {
            father[aFather] = bFather;
        }
    }
    for (var i = 0; i < n; i++) {
        if (find(i) !== 0) {
            return false;
        }
    }
    return true;

    function find(a) {
        if (father[a] === a) {
            return a;
        }
        return father[a] = find(father[a]);
    }
};

console.log(validTree(5, [[0,1],[0,2],[2,3],[2,4]]));