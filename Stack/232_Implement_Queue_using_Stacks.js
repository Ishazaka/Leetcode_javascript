



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



// 2nd way

class MyQueue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    /** 
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.s1.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2.pop();
    }

    /**
     * @return {number}
     */
    peek() {
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2[this.s2.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.s1.length === 0 && this.s2.length === 0;
    }
}


