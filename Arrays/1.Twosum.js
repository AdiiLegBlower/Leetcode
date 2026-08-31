/* 
The initial doubt was how do I look for the the numbers that are 
repeated when the nums are put in the set. The simple answer is you dont need to look for it every step. If 
it is there you will find it and if its not you will get it eventually.
*/



var twoSum = function(nums, target) {
    let a = new Map()
    for (let i = 0; i < nums.length; i++){
        
    }

    for (let i = 0; i < nums.length; i++){
        let n = target - nums[i]
        if (a.has(n)){
            return [i, a.get(n)]
        }

        a.set(nums[i], i);
    }
};

