

class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0];
        for (let i = 1; i < strs.length; i++) {
            let j = 0;
            while (j < Math.min(prefix.length, strs[i].length)) {
                if (prefix[j] !== strs[i][j]) {
                    break;
                }
                j++;
            }
            prefix = prefix.slice(0, j);
        }
        return prefix;
    }
}



// Vertical Scanning


class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        for (let i = 0; i < strs[0].length; i++) {
            for (let s of strs) {
                if (i === s.length || s[i] !== strs[0][i]) {
                    return s.slice(0, i);
                }
            }
        }
        return strs[0];
    }
}


// 3rd way
// Soting

class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 1) {
            return strs[0];
        }
        
        strs.sort();
        let N = Math.min(strs[0].length, strs[strs.length - 1].length);
        for (let i = 0; i < N; i++) {
            if (strs[0][i] !== strs[strs.length - 1][i]) {
                return strs[0].slice(0, i);
            }
        }
        return strs[0];
    }
}



// 4th way


class TrieNode {
    constructor() {
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
    }

    /**
     * @param {string} word
     * @param {number} prefixLen
     * @return {number}
     */
    lcp(word, prefixLen) {
        let node = this.root;
        let i = 0;
        while (i < Math.min(word.length, prefixLen)) {
            if (!node.children[word[i]]) {
                return i;
            }
            node = node.children[word[i]];
            i++;
        }
        return Math.min(word.length, prefixLen);
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 1) {
            return strs[0];
        }
        
        let mini = 0;
        for (let i = 1; i < strs.length; i++) {
            if (strs[mini].length > strs[i].length) {
                mini = i;
            }
        }

        const trie = new Trie();
        trie.insert(strs[mini]);
        let prefixLen = strs[mini].length;

        for (let i = 0; i < strs.length; i++) {
            prefixLen = trie.lcp(strs[i], prefixLen);
        }

        return strs[0].substring(0, prefixLen);
    }
}
