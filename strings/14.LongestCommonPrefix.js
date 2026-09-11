var longestCommonPrefix = function(strs) {
    let common = strs[0]
    for (let i = 1; i < strs.length; i++){
        let temp = ''
        let count = Math.min(common.length, strs[i].length)
        for (let j = 0; j < count; j++){
            if (common[j] == strs[i][j]){
                temp += common[j]
            }
            else break
        }
        common = temp
    }
    return common
};