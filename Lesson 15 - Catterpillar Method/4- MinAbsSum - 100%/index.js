/**
 * SECOND TRY : Separate mins and maxs
 * NOTE: It's a super sensitive solution. I think I'm going for the brute force in the exams
 * STRATEGY: track negs and positives since the loops might be really smaller, and use bisection method to shorten the loop
 * CORRECTNESS 100
 * PERFORMANCE 100
 * SCORE 100
 */
 function absSum(P,Q){
   return Math.abs(P+Q);
 }
 function solution(A) {

   if(A.length === 1) return absSum(A[0] , A[0]);

   let negatives = [];
   let positives = [];

   A = A.sort((a,b) => a - b);

   A.forEach(el => {
     if(el >= 0){
       positives.push(el);
     }else {
       negatives.push(el);
     }
   });

   if(positives[0] && positives[0] === 0) { return 0; }
   if(negatives.length === 0) return absSum(positives[0],positives[0]);
   if(positives.length === 0) return absSum(negatives[negatives.length-1],negatives[negatives.length-1]);

   let min = 2* positives[0];

   for(let i = 0; i < negatives.length; i++){
       let start = 0;
       let end = positives.length -1;
       let negative = negatives[i];

       // Using bisection
       while(start <= end){
         let mid = Math.round((start + end) /2);
         let positive = positives[mid];
         let abs = absSum(negative, positive);
         if(min > abs) min = abs;
         // Condition for scale the while loop
         if(positive > Math.abs(negative)) {
           end = mid -1;
         } else {
           start = mid + 1;
         }
       }
   }


   return min;
 }
/**
 * FIRST TRY : BRUTE FORCE
 * CORRECTNESS 100
 * PERFORMANCE: 28
 * SCORE 54
 */

function absSum(P,Q){
    return Math.abs(P + Q);
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let cache = {};
    let min = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < A.length; i++){
        for(let k = i; k < A.length; k++){
            let abs = absSum(A[i],A[k]);
            if(abs < min){
                min = abs;
            }
        }
    }
    return min;
}
