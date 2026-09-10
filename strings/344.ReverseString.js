var reverseString = function(s) {
    let count = s.length
    for (let i = s.length - 2; i > -1; i--){
        s.push(s[i])
    }
    s.splice(0, count - 1)
};