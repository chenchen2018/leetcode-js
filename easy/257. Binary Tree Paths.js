/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

//first do it in recursive way
var binaryTreePaths = function(root) {
    var res = [];
    if (!root) {
        return res;
    }
    helper(res, root, "");
    return res;
};

function helper(res, node, prefix) {
    prefix += "->" + node.val;
    if (isLeaf(node)) {
        res.push(prefix.slice(2));
        return;
    }
    if (node.left) {
        helper(res, node.left, prefix);
    }
    if (node.right) {
        helper(res, node.right, prefix);
    }
}

function isLeaf(node) {
    return !(node.left || node.right);
}

//can we do it in iteration way? yes sure!
var binaryTreePaths2 = function(root) {
    var res = [];
    if (!root) {
        return res;
    }
    var nodes = [], prefixes = [];
    nodes.push(root);
    prefixes.push("");
    while (nodes.length) {
        var node = nodes.shift(), prefix = prefixes.shift();
        var newPrefix = prefix + "->" + node.val;
        if (isLeaf(node)) {
            res.push(newPrefix.slice(2));
            continue;
        }
        if (node.left) {
            nodes.push(node.left);
            prefixes.push(new String(newPrefix));
        }
        if (node.right) {
            nodes.push(node.right);
            prefixes.push(new String(newPrefix));
        }
    }
    return res;
};