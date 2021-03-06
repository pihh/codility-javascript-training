/**
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N) (not counting the storage required for input arguments).
*/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let min = 0;

    // Cleanup ( sort the array and filter only positives)
    A = A.sort((a,b) => a-b)
         .filter(el => el > 0);

    for(let i = 0; i < A.length; i++) {
        if(A[i]> min){
            // Stop execution if condition met
            if(A[i] > min +1) {
                break;
            }
            // Update minimum existing value
            min = A[i];
        }
    }

    // Return first non evisting value
    return min + 1;
}
