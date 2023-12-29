/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var items = new Map();
    for (var i = 0; i < nums.length; i++ ) {
        if (false == items.has(nums[i])) {
            items.set(nums[i], '-');
        } else {
            return true;
        }
    }
    return false;
};