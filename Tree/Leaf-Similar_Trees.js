

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


// 2nd way

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

        const dfs1 = (root, leaf) => {
            if (!root) return true;
            if (!root.left && !root.right) {
                if (!leaf.length) return false;
                return leaf.pop() === root.val;
            }
            return dfs1(root.right, leaf) && dfs1(root.left, leaf);
        };

        const leaf1 = [];
        dfs(root1, leaf1);
        return dfs1(root2, leaf1) && leaf1.length === 0;
    }
}



// 3rd way


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
        const getPathLeaf = (stack) => {
            while (stack.length) {
                const node = stack.pop();
                if (node.right) stack.push(node.right);
                if (node.left) stack.push(node.left);
                if (!node.left && !node.right) return node.val;
            }
        };

        const stack1 = [root1], stack2 = [root2];
        while (stack1.length && stack2.length) {
            if (getPathLeaf(stack1) !== getPathLeaf(stack2)) {
                return false;
            }
        }
        return stack1.length === 0 && stack2.length === 0;
    }
}
