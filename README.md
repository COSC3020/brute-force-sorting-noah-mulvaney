[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

My implementation has an average complexity of $\Theta(n!)$.

I calculated $\Theta(n^n)$ using the following analysis:  
$T(n) = 1$ for $n \leq 1$.  
$T(n) = n(T(n-1) + (n-1)!) = n T(n-1) + n!$ for recursive complexity.  
This is because of the outer most loop (line 23) runs $n$ times. Within this loop, I recursively call my function on an array of size $n-1$ (line 25) and run the inner loop on all $(n-1)!$ sub-permutations (line 27). I am ignoring the if statement on line 30 in my recursive analysis, since it does not evaluate to true in any of the recursive calls.
At recursive level $i = n - 1$, the time complexity is asymptotically equivalent to $n!$

The best case input is an already sorted array, because my implementation will recursively form the permutations beginning with the first item in the array. For the same reason, a reverse sorted array is the worst case input. There are $n!$ possible permutations. If you generated random permutations (with repetition or replacement) rather than systematically checking them, the expected number of permutations to check is $n!$.

Note: Referenced https://math.stackexchange.com/questions/1119872/on-average-how-many-times-must-i-roll-a-dice-until-i-get-a-6 for help understanding the expected number of permutations.
