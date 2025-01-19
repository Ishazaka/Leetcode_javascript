



class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    /** 
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack1.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        while (this.stack1.length > 1) {
            this.stack2.push(this.stack1.pop());
        }
        const res = this.stack1.pop();
        while (this.stack2.length) {
            this.stack1.push(this.stack2.pop());
        }
        return res;
    }

    /**
     * @return {number}
     */
    peek() {
        while (this.stack1.length > 1) {
            this.stack2.push(this.stack1.pop());
        }
        const res = this.stack1[this.stack1.length - 1];
        while (this.stack2.length) {
            this.stack1.push(this.stack2.pop());
        }
        return res;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.stack1.length === 0;
    }
}
