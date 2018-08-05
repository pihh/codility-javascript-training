/**
 * SECOND ATTEMPT
 * Greedy way
 * CORRECTNESS 100
 * PERFORMANCE 100
 * SCORE 100
 * https://app.codility.com/demo/results/trainingGCEPCQ-STF/
  Wouldn't risk it in a algorithm test since I can't find a reason for not having several smaller ones..  for instance ([1,2,3,3,7,9,9],[5,2,3,6,8,9,19])
*/

 function solution(A, B) {
     // write your code in JavaScript (Node.js 8.9.4)
     if(A.length === 0) return 0;
     let max = 1;
     let start = A[0];
     let end = B[0];

     for(let i = 1; i < A.length; i++){
         if(A[i] > end){
             start = A[i];
             end = B[i];
             max++;
         }
     }

     return max;
 }

/**
 * BRUTE FORCED
 * CORRECTNESS 100
 * PERFORMANCE 20
 * SCORE 60
 * O(N + max(B))
 */
 function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    /**
     * Brute Force:
     *  for loop with while loop with storage
     */
    let final = B[B.length-1];
    let max = 0;

    for(let i = 0; i < A.length; i++){
        let start = A[i];
        let end = B[i];

        let count = 1;
        let k = i + 1;

        while(end <= final && k < A.length ){
            if(A[k] > end){
                start = A[k];
                end = B[k];
                count++;
                if(count > max){
                    max = count;
                }
            }else{
                k++;
            }
        }
    }
    return max;
}
