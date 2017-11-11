/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * This is a recursion solution
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    return isSame(root.left, root.right);
};

function isSame(left, right) {
    if (!left) {
        return !right;
    }
    if (!right) {
        return false;
    }
    if (left.val != right.val) {
        return false;
    }
    return isSame(left.left, right.right) && isSame(left.right, right.left);
}

var isSymmetirc2 = function(root) {
    if (!root) {
        return true;
    }
    var leftSubtree = [], rightSubtree = [];
    leftSubtree.push(root.left);
    rightSubtree.push(root.right);
    while (leftSubtree.length && rightSubtree.length) {
        var leftNode = leftSubtree.shift(), rightNode = rightSubtree.shift();
        if (!leftNode) {
            if (rightNode) {
                return false;
            }
        } else {
            if (!rightNode) {
                return false;
            } else {            //both nodes are not null
                if (leftNode.val != rightNode.val) {
                    return false;
                }
                leftSubtree.push(leftNode.left);
                leftSubtree.push(leftNode.right);
                rightSubtree.push(rightNode.right);
                rightSubtree.push(rightNode.left);
            }
        }
    }
    return leftSubtree.length === 0 && rightSubtree.length === 0;
};