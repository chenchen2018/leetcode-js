/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    if (!n) {
        return n;
    }
    var father = [];
    var components = n;

    for (var i = 0; i < n; i++) {
        father[i] = i;
    }

    for (var i in edges) {
        var a = edges[i][0], b = edges[i][1];
        var aFather = find(a), bFather = find(b);
        if (aFather !== bFather) {
            components--;
            father[aFather] = bFather;
        }
    }
    return components;

    function find(a) {
        if (father[a] === a) {
            return a;
        }
        return father[a] = find(father[a]);
    }
};