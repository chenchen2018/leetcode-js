/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    var res = [];
    if (!edges === null || !edges.length) {
        return res;
    }
    var father = [];
    for (var index = 1; index <= edges.length; index++) {
        father[index] = index;
    }
    for (var i in edges) {
        var a = edges[i][0], b = edges[i][1];
        var aFather = find(a), bFather = find(b);
        if (aFather == bFather) {
            return edges[i];
        } else {
            father[aFather] = bFather;
        }
    }
    return res;

    function find(a) {
        if (a === father[a]) {
            return a;
        }
        return father[a] = find(father[a]);
    }
};