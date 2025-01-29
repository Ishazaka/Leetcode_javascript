
class MyHashSet {
    constructor() {
        this.data = [];
    }

    /** 
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (!this.data.includes(key)) {
            this.data.push(key);
        }
    }

    /** 
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.data.indexOf(key);
        if (index !== -1) {
            this.data.splice(index, 1);
        }
    }

    /** 
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.data.includes(key);
    }
}


// 2nd way --> Boolean Array


class MyHashSet {
    constructor() {
        this.data = new Array(1000001).fill(false);
    }

    /** 
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.data[key] = true;
    }

    /** 
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.data[key] = false;
    }

    /** 
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.data[key];
    }
}




//3rd way

class ListNode {
    /**
     * @param {number} key
     */
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class MyHashSet {
    constructor() {
        this.set = Array.from({ length: 10000 }, () => new ListNode(0));
    }

    /**
     * @param {number} key
     * @return {number}
     */
    hash(key) {
        return key % this.set.length;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let cur = this.set[this.hash(key)];
        while (cur.next) {
            if (cur.next.key === key) {
                return;
            }
            cur = cur.next;
        }
        cur.next = new ListNode(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let cur = this.set[this.hash(key)];
        while (cur.next) {
            if (cur.next.key === key) {
                cur.next = cur.next.next;
                return;
            }
            cur = cur.next;
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let cur = this.set[this.hash(key)];
        while (cur.next) {
            if (cur.next.key === key) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }
}


// 4th way


class TreeNode {
    /**
     * @param {number} key
     */
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.root = this._insert(this.root, key);
    }

    /**
     * @param {TreeNode} node
     * @param {number} key
     * @return {TreeNode}
     */
    _insert(node, key) {
        if (!node) return new TreeNode(key);
        if (key < node.key) node.left = this._insert(node.left, key);
        else if (key > node.key) node.right = this._insert(node.right, key);
        return node;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.root = this._deleteNode(this.root, key);
    }

    /**
     * @param {TreeNode} node
     * @param {number} key
     * @return {TreeNode}
     */
    _deleteNode(node, key) {
        if (!node) return null;
        if (key < node.key) node.left = this._deleteNode(node.left, key);
        else if (key > node.key) node.right = this._deleteNode(node.right, key);
        else {
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            let minNode = this._minValueNode(node.right);
            node.key = minNode.key;
            node.right = this._deleteNode(node.right, minNode.key);
        }
        return node;
    }

    /**
     * @param {TreeNode} node
     * @return {TreeNode}
     */
    _minValueNode(node) {
        while (node.left) node = node.left;
        return node;
    }

    /** 
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this._search(this.root, key);
    }

    /** 
     * @param {TreeNode} node
     * @param {number} key
     * @return {boolean}
     */
    _search(node, key) {
        if (!node) return false;
        if (key === node.key) return true;
        if (key < node.key) return this._search(node.left, key);
        return this._search(node.right, key);
    }
}

class MyHashSet {
    constructor() {
        this.size = 10000;
        this.buckets = Array.from({ length: this.size }, () => new BST());
    }

    _hash(key) {
        return key % this.size;
    }

    /** 
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const idx = this._hash(key);
        if (!this.buckets[idx].contains(key)) {
            this.buckets[idx].add(key);
        }
    }

    /** 
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const idx = this._hash(key);
        this.buckets[idx].remove(key);
    }

    /** 
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const idx = this._hash(key);
        return this.buckets[idx].contains(key);
    }
}



// 5th way


class MyHashSet {
    constructor() {
        // key is in the range [1, 1000000]
        // 31251 * 32 = 1000032
        this.set = new Array(31251).fill(0);
    }

    /** 
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.set[Math.floor(key / 32)] |= this.getMask(key);
    }

    /** 
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if (this.contains(key)) {
            this.set[Math.floor(key / 32)] ^= this.getMask(key);
        }
    }

    /** 
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return (this.set[Math.floor(key / 32)] & this.getMask(key)) !== 0;
    }

    /** 
     * @param {number} key
     * @return {number}
     */
    getMask(key) {
        return 1 << (key % 32);
    }
}
