
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



