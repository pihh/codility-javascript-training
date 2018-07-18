## Strategy
First find the maximal slice ( since the maximal double slice's value should be that slice - the local minimum)
Get the edge cases:
  - first, remove minumum from that one and check if it extends ( example - 4 7 10, removing 7 it goes 4 12 ,
    means that the maximal slice is the first one but slicing there the max double slice extends to the second one )
  - second, let's imagine that the edge is at the first or last element. it means that removing that edge, if the edge
    is big enough, you can even have a max double slice from 0 to edge and from edge to end. ( I think at least, in the
    real world I'd code it that way and track the results with real data to take my conclusions )  

So:
  1 - find max slice
  2 - remove local minumum from max slice and find the new max slice ( track these as the best probable edges )
  3 - find max slice from 0 to middle edge and from middle edge to end.
  4 - get the max sum of those 3, if it's greater than 0 return it.

this way I'll need 6 unested loops to find the solution ( which might not be perfect )  

## Problem
A non-empty array A consisting of N integers is given.

A triplet (X, Y, Z), such that 0 ≤ X < Y < Z < N, is called a double slice.

The sum of double slice (X, Y, Z) is the total of A[X + 1] + A[X + 2] + ... + A[Y − 1] + A[Y + 1] + A[Y + 2] + ... + A[Z − 1].

For example, array A such that:

    A[0] = 3
    A[1] = 2
    A[2] = 6
    A[3] = -1
    A[4] = 4
    A[5] = 5
    A[6] = -1
    A[7] = 2
contains the following example double slices:

double slice (0, 3, 6), sum is 2 + 6 + 4 + 5 = 17,
double slice (0, 3, 7), sum is 2 + 6 + 4 + 5 − 1 = 16,
double slice (3, 4, 5), sum is 0.
The goal is to find the maximal sum of any double slice.

Write a function:

int solution(int A[], int N);

that, given a non-empty array A consisting of N integers, returns the maximal sum of any double slice.

For example, given:

    A[0] = 3
    A[1] = 2
    A[2] = 6
    A[3] = -1
    A[4] = 4
    A[5] = 5
    A[6] = -1
    A[7] = 2
the function should return 17, because no double slice of array A has a sum of greater than 17.

Assume that:

N is an integer within the range [3..100,000];
each element of array A is an integer within the range [−10,000..10,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N) (not counting the storage required for input arguments).
