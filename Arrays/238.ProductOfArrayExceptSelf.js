 var productExceptSelf = function(nums) {
    let postfix = [1], prefix = [1]
    let preProd = 1, postProd = 1;
    for (let i = 0; i < nums.length -1; i++){
        preProd *= nums[i]
        postProd *= nums[nums.length - i - 1]
        prefix.push(preProd)
        postfix.push(postProd)
    }

    let ans = []
    for (let i = 0; i < nums.length; i++){
            ans.push(prefix[i] * postfix[nums.length - i - 1])
    }
    return ans
};