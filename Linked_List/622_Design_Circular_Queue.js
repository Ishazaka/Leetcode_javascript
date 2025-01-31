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
