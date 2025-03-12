
// 1st way
// Depth First Search

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
     * @param {TreeNode} root
     * @return {number[]}
     */
    postorderTraversal(root) {
        const res = [];

        const postorder = (node) => {
            if (!node) return;
            postorder(node.left);
            postorder(node.right);
            res.push(node.val);
        };

        postorder(root);
        return res;
    }
}



// 2nd way
// Iterative Depth First Search - I

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
     * @param {TreeNode} root
     * @return {number[]}
     */
    postorderTraversal(root) {
        const stack = [root];
        const visit = [false];
        const res = [];

        while (stack.length) {
            const cur = stack.pop();
            const v = visit.pop();

            if (cur) {
                if (v) {
                    res.push(cur.val);
                } else {
                    stack.push(cur);
                    visit.push(true);
                    stack.push(cur.right);
                    visit.push(false);
                    stack.push(cur.left);
                    visit.push(false);
                }
            }
        }





// 3rd way
 // Iterative Depth First Search - II 

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
     * @param {TreeNode} root
     * @return {number[]}
     */
    postorderTraversal(root) {
        const res = [];
        const stack = [];
        let cur = root;

        while (cur || stack.length) {
            if (cur) {
                res.push(cur.val);
                stack.push(cur);
                cur = cur.right;
            } else {
                cur = stack.pop();
                cur = cur.left;
            }
        }

        res.reverse();
        return res;
    }
}
        

        return res;
    }
}
