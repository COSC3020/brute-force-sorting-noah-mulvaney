// COSC3020 Brute Force Sorting
// Noah Mulvaney
// 5 Apr 2024

// Determine if a list is sorted
//      Returns true or false
//      Assumes comparision is a transitive ordering
function isSorted(arr) {
    for (let i = 1; i < arr.length; ++i)
        if (arr[i - 1] > arr[i]) return false;
    
    return true;
}

// Get array of possible permutations of arr
//      Based on algorithm from https://www.tutorialspoint.com/generating-all-possible-permutations-of-array-in-javascript
function perm(arr) {
    let perms = [];
    
    if (arr.length == 0) return [];
    if (arr.length == 1) return [arr];
    
    for (let i = 0; i < arr.length; ++i) {
        let n = arr[i];
        let subPerms = perm(arr.slice(0, i).concat(arr.slice(i + 1)));
        
        for (let j = 0; j < subPerms.length; ++j) {
            let posPerm = [n].concat(subPerms[j]);
            perms.push(posPerm);
        }
    }
    
    return perms;
}

// Sorts list and returns # of permuations tried
function permutationSort(arr) {
    let perms = perm(arr);
    for (let i = 0; i < perms.length; ++i) {
        if (isSorted(perms[i])) {
            for (let j = 0; j < arr.length; ++j)
                arr[j] = perms[i][j];
            return i + 1;
        }
    }
}
