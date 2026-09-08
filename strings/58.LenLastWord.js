var lengthOfLastWord = function(s) {
    let isBlank = false
    let WordLen = 0
    for (let i = 0; i < s.length; i++){
        if (isBlank == false && s[i] != ' '){
            WordLen++
        }
        else if (isBlank == false && s[i] == ' '){
            isBlank = true
        }
        else if (isBlank == true && s[i] != ' '){
            isBlank = false
            WordLen = 1
        }
    }
    return WordLen
};