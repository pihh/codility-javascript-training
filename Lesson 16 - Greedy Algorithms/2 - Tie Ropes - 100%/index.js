/**
 * FIRST ATTEMPT
 * CORRECTNESS 100
 * PERFORMANCE 100
 * SCORE 100
 *
 * https://app.codility.com/demo/results/trainingKKD47K-9BB/
 */

function solution(K, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    /**
     * Greedy way since I'm not even seeing a brute force way
     *
     */
    let count = 0;
    let len = 0;

    for(let i = 0; i < A.length; i++){
        len += A[i];
        if(len >= K){
            len = 0;
            count++;
        }
    }

    return count;
}
