var lengthOfLongestSubstring = function(s) {
    let Max = 0
    let seen = new Set()
    for (let i = 0; i < s.length; i++){
        let count = 1
        seen.add(s[i])
        for (let j = i + 1; j < s.length; j++){
            if (seen.has(s[j])){
                if (count > Max) Max = count
                count = 0
                seen.clear()
                break
            }
            seen.add(s[j])
            count++
        }
        if (count > Max) Max = count
        seen.clear()
    }

    return Max
};