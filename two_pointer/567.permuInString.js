/* 
Need to solve it in a more optimum way 🚩
*/

var checkInclusion = function(s1, s2) {
        
        let left = 0
        let seen = new Map
        for (let i = 0; i < s1.length; i++){
            if (seen.has(s1[i])){
                seen.set(s1[i], seen.get(s1[i]) + 1)
            }
            else seen.set(s1[i], 1)
        }
        

        while (left < s2.length){
        let match = 0
            if (seen.has(s2[left])){
                let copyMap = new Map(seen)
                copyMap.set(s2[left], copyMap.get(s2[left]) - 1)
                match++
                if (s1.length > s2.length - left) return false
                for (let i = left + 1; i < s2.length; i++){
                    if (seen.has(s2[i]) && copyMap.get(s2[i]) > 0) {
                        match++
                        copyMap.set(s2[i], copyMap.get(s2[i]) - 1)
                    }
                    else break
                }
                if ( match == s1.length) return true
            }
            left++
        }
        return false
};