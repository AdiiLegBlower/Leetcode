var isSubsequence = function(s, t) {
    let count = 0
    for (let i = 0; i < s.length; i++){
        let found = false
        for (let j = count; j < t.length; j++){
            if (s[i] == t[j]){
                count = j + 1
                found = true
                break
            }
        }
        if (!found){
            return false
        }
    }

    return true
};