var isAnagram = function(s, t) {
    let key1 = new Map()
    let key2 = new Map()

    if (s.length != t.length) return false

    for (let i = 0; i < s.length; i++){
        if (key1.has(s[i])){
            key1.set(s[i], key1.get(s[i]) + 1)
        }
        else {
            key1.set(s[i], 1)
        }
    }

    for (let i = 0; i < s.length; i++){
        if (key2.has(t[i])){
            key2.set(t[i], key2.get(t[i]) + 1)
        }
        else {
            key2.set(t[i], 1)
        }

        if (key1.has(t[i])){
            if (key1.get(t[i]) < key2.get(t[i])) return false
        }
        else return false
    }

    return true
};