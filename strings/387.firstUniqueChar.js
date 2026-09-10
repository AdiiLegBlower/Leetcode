var firstUniqChar = function(s) {
    let seen = new Map()
    for (let i = 0; i < s.length; i++){
        if (seen.has(s[i])){
            seen.set(s[i], seen.get(s[i]) + 1)
        }
        else {
            seen.set(s[i], 1)
        }
    }

    for (let i = 0; i < s.length; i++){
        if (seen.get(s[i]) == 1){
            return i
        }
    }
    return -1
};