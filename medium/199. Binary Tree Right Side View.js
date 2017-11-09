/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    var res = [];
    traverse(root, res, 0);
    return res;
};

function traverse(node, res, level) {
    if (!node) {
        return;
    }
    if (res.length <= level) {
        res.push(node.val);
    }
    traverse(node.right, res, level + 1);
    traverse(node.left, res, level + 1);
}

//try to do it in iteration way
var rightSideView2 = function(root) {
    var res = [];
    if (!root) {
        return res;
    }
    var queue = [];
    queue.push(root);
    while (queue.length) {
        var nextLevel = [];
        res.push(queue[0].val);
        while (queue.length) {
            var node = queue.shift();
            if (node.right) {
                nextLevel.push(node.right);
            }
            if (node.left) {
                nextLevel.push(node.left);
            }
        }
        queue = nextLevel;
    }
    return res;
}