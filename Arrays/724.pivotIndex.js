/* 
    If we look carefully we can simply reduce the current index from the
    sum to find the current sum isntead of calculating it at each stage
*/


var pivotIndex = function(nums) {
    let rightSum = 0
    for (let i = 0; i < nums.length; i++){
        rightSum += nums[i]
    }

    let sum = 0

    for (let i = 0; i < nums.length; i++){
        rightSum -= nums[i]
        if (sum == rightSum){
            return i
        }

        sum += nums[i]
    }
    return -1
};