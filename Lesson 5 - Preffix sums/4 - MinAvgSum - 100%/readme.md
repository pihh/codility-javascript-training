# Codility: Lesson 5: Preffix sums
## Exercise 4: MinAvgTwoSlices
## Dificulty: Respectable

[TOC]

### Notes
This was actually the first algorithm that I had to research on how to solve it with 100% accurrency.
I'd love to understand how a developer that didnt't came accross this specific problem could get to the conclusion that
all slices are subsets of slices with length 2 or 3.
Will update this repo it I find the answer to that.

### Strategy
In order to solve this problem one has to assume that the following statement is true:
    - All other slices are subsets of smaller slices of 2 or 3 elements.
    - Why this is true? I don't know. Neither I imagine how a regular programmer could reach this solution ( but will update this info as soon I know it )

My first strategy was a (dynamic) elastic algorithm that evaluates the array and based on the result it decides the next step. For example:
    Step 1: evaluate [0,1] -> res = 3; global min = 3;  global min position = 0;
    Step 2: evaluate [0,1,2] -> res = 8/3; larger than global min, restart the algorithm and update first index to 1.
    Step 3: evaluate [1,2] -> res = 2; Smaller than global min, global min = 2; global min position = 1;
    Step 4: evaluate [1,2,3] -> res = 9/3; larger than global min, restart the algorigthm and update first index to 2.
    Step 5: evalutate [2,3] -> res = 7/2; larger than global min, restart the algorithm and update first index to 3.
    Step 6: evaluate [3,4] ...
    ...
    ...
    ...
    Step last: [A.length -2, A.length -1];

Where it failed? Algorithm exams are meant to be easy to be coded. In this case it isn't that simple and the algorithm failed at speed tests.

### Problem Description
Task description
A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

For example, array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
contains the following example slices:

slice (1, 2), whose average is (2 + 2) / 2 = 2;
slice (3, 4), whose average is (5 + 1) / 2 = 3;
slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
The goal is to find the starting position of a slice whose average is minimal.

Write a function:

function solution(A);

that, given a non-empty array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

For example, given array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
the function should return 1, as explained above.

Assume that:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−10,000..10,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N) (not counting the storage required for input arguments).
