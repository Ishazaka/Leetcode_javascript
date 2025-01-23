class MyHashMap {
    constructor() {
        this.map = new Array(1000001).fill(-1);
    }

    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.map[key] = value;
    }

    /** 
     * @param {number} key
     * @return {number}
     */
    get(key) {
        return this.map[key];
    }

    /** 
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.map[key] = -1;
    }
}



//2nd way

class ListNode {
    /** 
     * @param {number} key 
     * @param {number} val
     * @param {ListNode} next
     */
    constructor(key = -1, val = -1, next = null) {
        this.key = key;
        this.val = val;
        this.next = next;
    }
}

class MyHashMap {
    constructor() {
        this.map = Array.from({ length: 1000 }, () => new ListNode());
    }

    /** 
     * @param {number} key 
     * @return {number}
     */
    hash(key) {
        return key % this.map.length;
    }

    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let cur = this.map[this.hash(key)];
        while (cur.next) {
            if (cur.next.key === key) {
                cur.next.val = value;
                return;
            }
            cur = cur.next;
        }
        cur.next = new ListNode(key, value);
    }

    /** 
     * @param {number} key 
     * @return {number}
     */
    get(key) {
        let cur = this.map[this.hash(key)].next;
        while (cur) {
            if (cur.key === key) {
                return cur.val;
            }
            cur = cur.next;
        }
        return -1;
    }

    /** 
     * @param {number} key 
     * @return {void}
     */
    remove(key) {
        let cur = this.map[this.hash(key)];
        while (cur.next) {
            if (cur.next.key === key) {
                cur.next = cur.next.next;
                return;
            }
            cur = cur.next;
        }
    }
}
