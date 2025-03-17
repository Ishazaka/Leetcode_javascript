

// 1st way

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @return {boolean}
     */
    leafSimilar(root1, root2) {
        const dfs = (root, leaf) => {
            if (!root) return;
            if (!root.left && !root.right) {
                leaf.push(root.val);
                return;
            }
            dfs(root.left, leaf);
            dfs(root.right, leaf);
        };

        const leaf1 = [];
        const leaf2 = [];
        dfs(root1, leaf1);
        dfs(root2, leaf2);

        return JSON.stringify(leaf1) === JSON.stringify(leaf2);
    }
}
