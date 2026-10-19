var searchMatrix = function(matrix, target) {
    let rows = matrix.length, cols = matrix[0].length 
    let lo = 0, hi = rows*cols - 1;
    while (lo <= hi){
        let mid = Math.floor((lo + hi) / 2)
        let row = Math.floor(mid/cols) 
        let col = (mid % cols)

        if (matrix[row][col] > target){
            hi = mid - 1
        }
        else if (matrix[row][col] < target){
            lo = mid + 1
        }
        else {
            return true
        }
    }

    return false
};