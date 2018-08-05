/**
 * Second try
 * CORRECTNESS: 100%
 * PERFORMANCE: 100%
 * SCORE : 100
 * URL: https://app.codility.com/demo/results/trainingN86638-C8F/
 */
 function solution(A) {
     // write your code in JavaScript (Node.js 8.9.4)
     var map = new Map();

     for(let i = 0; i < A.length; i++){
         let el = Math.abs(A[i]);
         if(!map.has(el)){
             map.set(el,true);
         }
     }

     return map.size;
 }


/**
 * First try:
 * CORRECTNESS: 100%
 * PERFORMANCE: 0%
 * SCORE: 78
 * O(N**2)
 */


function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    /**
     * 1 - get abs value for all elements
     * 2 - filter where A[i] === index
     * 3 - return count
     */


    A = A.map(el => el = Math.abs(el));
    A = A.filter((el,i) => A.indexOf(el) === i);

    return A.length; // for checking logs
}
