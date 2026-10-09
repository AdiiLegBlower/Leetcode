var evalRPN = function(tokens) {
    let stack = []
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b)
    };

    for (let i = 0; i < tokens.length; i++){
        if (operations[tokens[i]]){
           let a = stack.pop()
            let b = stack.pop()
            let value = operations[tokens[i]](b, a)
            stack.push(value)
        }
        else {
            stack.push(Number(tokens[i]))
        }
    }
    return stack[stack.length -1]
};