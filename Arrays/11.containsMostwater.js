
var maxArea = function(height) {
    let left = 0, right = height.length - 1
    let max = -Infinity
    while (right > left){
        let h = Math.min(height[left], height[right])
        let b = right - left 
        max = Math.max(max, h*b)
        if(height[left] >= height[right]){
            right--
        }
        else {
            left++
        }
    }
    return max
};