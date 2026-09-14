/*
Numbers can directly be elemented from behind as if the sum of smaller number with the right most number already exceeds the target 
then its sum with the upcoming bigger numbers will obviously be bigger
*/




var twoSum = function(numbers, target) {
    let right = numbers.length - 1
    for (let i = 0; i < numbers.length; i++){
        let n = target - numbers[i]
        while (right > i){
            if (numbers[right] > n) right--
            else if (numbers[right] < n) break
            else return [i + 1, right + 1]
        } 
    }
};