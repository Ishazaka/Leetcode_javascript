//1st way  - Brute Force

class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.queue = [];
        this.capacity = k;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.queue.length === this.capacity) {
            return false;
        }
        this.queue.push(value);
        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.queue.length === 0) {
            return false;
        }
        this.queue.shift();
        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        return this.queue.length === 0 ? -1 : this.queue[0];
    }

    /**
     * @return {number}
     */
    Rear() {
        return this.queue.length === 0 ? -1 : this.queue[this.queue.length - 1];
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.queue.length === 0;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.queue.length === this.capacity;
    }
}



// Array

class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.queue = new Array(k);
        this.size = 0;
        this.front = 0;
        this.rear = -1;
        this.capacity = k;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.isFull()) {
            return false;
        }
        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = value;
        this.size++;
        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.isEmpty()) {
            return false;
        }
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        return this.isEmpty() ? -1 : this.queue[this.front];
    }

    /**
     * @return {number}
     */
    Rear() {
        return this.isEmpty() ? -1 : this.queue[this.rear];
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.size === this.capacity;
    }
}


// Doubly linkedin list



class ListNode {
    /**
     * @param {number} val 
     * @param {ListNode} next 
     * @param {ListNode} prev 
     */
    constructor(val, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.space = k;
        this.left = new ListNode(0);
        this.right = new ListNode(0, null, this.left);
        this.left.next = this.right;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.isFull()) return false;
        const cur = new ListNode(value, this.right, this.right.prev);
        this.right.prev.next = cur;
        this.right.prev = cur;
        this.space--;
        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.isEmpty()) return false;
        this.left.next = this.left.next.next;
        this.left.next.prev = this.left;
        this.space++;
        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        return this.isEmpty() ? -1 : this.left.next.val;
    }

    /**
     * @return {number}
     */
    Rear() {
        return this.isEmpty() ? -1 : this.right.prev.val;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.left.next === this.right;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.space === 0;
    }
}

