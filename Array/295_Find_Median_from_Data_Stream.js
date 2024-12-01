//with Sorting

class MedianFinder {
    constructor() {
        this.data = [];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.data.push(num);
    }

    /**
     * @return {number}
     */
    findMedian() {
        this.data.sort((a, b) => a - b);
        let n = this.data.length;
        if (n & 1) {
            return this.data[Math.floor(n / 2)];
        } else {
            return (this.data[n / 2] + this.data[n / 2 - 1]) / 2;
        }
    }
}


//with heap


class MedianFinder {
    constructor() {
        this.small = new PriorityQueue((a, b) => b - a); // Max heap for smaller half
        this.large = new PriorityQueue((a, b) => a - b); // Min heap for larger half
    }

    /**
     * @param {number} num
     */
    addNum(num) {
        if (this.large.isEmpty() || num > this.large.front()) {
            this.large.enqueue(num);
        } else {
            this.small.enqueue(num);
        }

        if (this.small.size() > this.large.size() + 1) {
            this.large.enqueue(this.small.dequeue());
        } else if (this.large.size() > this.small.size() + 1) {
            this.small.enqueue(this.large.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.front();
        } else if (this.large.size() > this.small.size()) {
            return this.large.front();
        } else {
            return (this.small.front() + this.large.front()) / 2.0;
        }
    }
}
