var isPalindrome = function(s) {
    s = s.toLowerCase()
    let strin = ''
    for (let i = 0; i < s.length; i++){
        if (('a' <= s[i] && 'z' >= s[i])||('0' <= s[i] && '9' >= s[i])){
            strin += s[i]
        }
        else continue
    }

    let left = 0
    let right = strin.length - 1
    while (right > left){
        if (strin[right] != strin[left]){
            return false
        }
        left++
        right--
    }
    return true
};