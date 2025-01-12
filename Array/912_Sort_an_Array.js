
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        function partition(left, right) {
            const mid = (left + right) >> 1;
            [nums[mid], nums[left + 1]] = [nums[left + 1], nums[mid]];
            
            if (nums[left] > nums[right])
                [nums[left], nums[right]] = [nums[right], nums[left]];
            if (nums[left + 1] > nums[right])
                [nums[left + 1], nums[right]] = [nums[right], nums[left + 1]];
            if (nums[left] > nums[left + 1])
                [nums[left], nums[left + 1]] = [nums[left + 1], nums[left]];
            
            const pivot = nums[left + 1];
            let i = left + 1;
            let j = right;
            
            while (true) {
                while (nums[++i] < pivot);
                while (nums[--j] > pivot);
                if (i > j) break;
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
            
            nums[left + 1] = nums[j];
            nums[j] = pivot;
            return j;
        }
        
        function quickSort(left, right) {
            if (right <= left + 1) {
                if (right == left + 1 && nums[right] < nums[left])
                    [nums[left], nums[right]] = [nums[right], nums[left]];
                return;
            }
            
            const j = partition(left, right);
            quickSort(left, j - 1);
            quickSort(j + 1, right);
        }
        
        quickSort(0, nums.length - 1);
        return nums;
    }
}
