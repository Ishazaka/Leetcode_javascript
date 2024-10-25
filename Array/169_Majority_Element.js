/**
 * Boyer Moore Algorithm
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/majority-element
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
	let res = nums[0];
	let count = 1;

	for (let i = 1; i < nums.length - 1; i++) {
		if (nums[i] === res) count++;
		else if (!--count) {
			res = nums[i + 1];
			count = 0;
		}
	}

	return res;
};
