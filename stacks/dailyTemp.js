var dailyTemperatures = function(temperatures) {
    let output = []
    let stack = [[temperatures[0], 0]]
    let pos = 1
    while(pos < temperatures.length){
        if (temperatures[pos] > stack[stack.length - 1][0]) {
            let top = stack.length - 1
            let count = 1
            while (top > -1 && temperatures[pos] > stack[top][0]){
                output[stack[top][1]] = pos - stack[top][1]
                top--
                count++
                stack.pop()
            }
            stack.push([temperatures[pos], pos])
        } 
        else{
            stack.push([temperatures[pos], pos])
        }
            
        pos++
    }
    while (stack.length != 0){
        output[stack[stack.length - 1][1]] = 0
        stack.pop()
    }
    return output
};