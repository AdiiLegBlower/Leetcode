/*
This solution adds both Two sum and Two sum - II 
*/


var threeSum = function(nums) {
    nums = nums.sort((a,b) => a - b)
    let sol = []
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == nums[i - 1]){
            continue
        } 
        let seen = new Set()
        let left = i + 1, right = nums.length - 1;
        while (left < right){    
            if (nums[right] == nums[right + 1]){
                right--
                continue
            }
            else {
                if (nums[left] + nums[right] > - nums[i]){
                    right--
                }
                else if (nums[left] + nums[right] < - nums[i]){
                    left++
                }
                else {
                    sol.push([nums[i], nums[left], nums[right]])
                    left++
                    right--
                }
            }
        }
    }
    return sol
};