// COSC3020 Brute Force Sorting
// Noah Mulvaney
// 10 Apr 2024

// Determine if a list is sorted
function isSorted(arr) {
    for (let i = 1; i < arr.length; ++i)
        if (arr[i - 1] > arr[i]) return false;
    
    return true;
}

// Get array of possible permutations of arr
//      Based on algorithm from https://www.tutorialspoint.com/generating-all-possible-permutations-of-array-in-javascript
function permutationSort(sortArr, arr) {
    if (arr == null) arr = sortArr;
    
    let perms = [];
    
    if (arr.length == 0) return [];
    if (arr.length == 1) return [arr];
    
    for (let i = 0; i < arr.length; ++i) {
        let n = arr[i];
        let subPerms = permutationSort(null, arr.slice(0, i).concat(arr.slice(i + 1)));
        
        for (let j = 0; j < subPerms.length; ++j) {
            let posPerm = [n].concat(subPerms[j]);
            
            if (sortArr != null && isSorted(posPerm)) {
                for (let k = 0; k < sortArr.length; ++k)
                    sortArr[k] = posPerm[k];
                return i * sortArr.length + j;
            }
            
            perms.push(posPerm);
        }
    }
    
    return perms;
}

/* Debug
let arr = [2, 7, 5, 3, 1, 9, 8];
console.log(permutationSort(arr));
console.log(arr);
*/
