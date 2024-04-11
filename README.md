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

My implementation has an average complexity of $\Theta(n^n)$. Each recursive level has a complexity of approximately $n T(n-1) + n*n! + n^2$. For $i=n-3$ levels of recursion, this results in an approximate time complexity of $n^n + n^n n! + n^n$ which is an element of $\Theta(n^n)$.

The best case input is an already sorted array, because my implementation will recursively form the permutations beginning with the first item in the array. For the same reason, a reverse sorted array is the worst case input. There are $n!$ possible permutations. If you generated random permutations (with repetition or replacement) rather than systematically checking them, the expected number of permutations to check is $n!$. My implementation obviously adds a lot of additional overhead complexity checking and copying the array.

Note: Referenced https://math.stackexchange.com/questions/1119872/on-average-how-many-times-must-i-roll-a-dice-until-i-get-a-6 for help understanding the expected number of permutations.
