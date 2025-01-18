
//1st way

class Solution {
    evalRPN(tokens) {
        while (tokens.length > 1) {
            for (let i = 0; i < tokens.length; i++) {
                if ("+-*/".includes(tokens[i])) {
                    const a = parseInt(tokens[i - 2]);
                    const b = parseInt(tokens[i - 1]);
                    let result;
                    if (tokens[i] === "+") result = a + b;
                    else if (tokens[i] === "-") result = a - b;
                    else if (tokens[i] === "*") result = a * b;
                    else if (tokens[i] === "/") result = Math.trunc(a / b);
                    
                    tokens.splice(i - 2, 3, result.toString());
                    break;
                }
            }
        }
        return parseInt(tokens[0]);
    }
}


// 2nd way


class DoublyLinkedList {
    constructor(val, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let head = new DoublyLinkedList(tokens[0]);
        let curr = head;

        for (let i = 1; i < tokens.length; i++) {
            curr.next = new DoublyLinkedList(tokens[i], null, curr);
            curr = curr.next;
        }

        let ans = 0;
        while (head !== null) {
            if ("+-*/".includes(head.val)) {
                let l = parseInt(head.prev.prev.val);
                let r = parseInt(head.prev.val);
                let res = 0;
                if (head.val === "+") {
                    res = l + r;
                } else if (head.val === "-") {
                    res = l - r;
                } else if (head.val === "*") {
                    res = l * r;
                } else {
                    res = Math.trunc(l / r);
                }

                head.val = res.toString();
                head.prev = head.prev.prev.prev;
                if (head.prev !== null) {
                    head.prev.next = head;
                }
            }

            ans = parseInt(head.val);
            head = head.next;
        }

        return ans;
    }
}

// 3rd way


class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        
        /**
         * @return {number}
         */
        const dfs = () => {
            const token = tokens.pop();
            if (!"+-*/".includes(token)) {
                return parseInt(token);
            }

            const right = dfs();
            const left = dfs();

            if (token === '+') {
                return left + right;
            } else if (token === '-') {
                return left - right;
            } else if (token === '*') {
                return left * right;
            } else {
                return Math.trunc(left / right);
            }
        };

        return dfs();
    }
}



// 4th way


class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (const c of tokens) {
            if (c === '+') {
                stack.push(stack.pop() + stack.pop());
            } else if (c === '-') {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b - a);
            } else if (c === '*') {
                stack.push(stack.pop() * stack.pop());
            } else if (c === '/') {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(Math.trunc(b / a));
            } else {
                stack.push(parseInt(c));
            }
        }
        return stack.pop();
    }
}
