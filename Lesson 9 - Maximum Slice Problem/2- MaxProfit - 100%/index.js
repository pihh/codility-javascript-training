/**
 * Descriptive algorithm
 *
 A[0] = 23171
 A[1] = 21011
 A[2] = 21123
 A[3] = 21366
 A[4] = 21013
 A[5] = 21367

 // 0 -> [0,x] - bought on 0, sold on X [Max de 1 a fim] - 21367 - 23171 =  // BEST CASE -1804
 // 1 -> [1,x] - bought on 1, sold on X [max de 2 a fim] - 21367 - 21011 =  // BEST CASE 356
 // 2 -> [2,x] - bought on 2, sold on X [max de 3 a fim] - 21367 - 21123 =  // BEST CASE 356

 find local maximum from i to end
 // when i = n , maximum = n
 // when i = n -1
 */

/**
 * @correctness 100%; - failed one case [0, 200000] - I should add a edge case
 * @performance: 100%;
 */
 function solution(A) {

   // EDGE
   if(A.length === 0){ return 0; }
   // EDGE (VERY SMALL INPUT - fix the edge case I missed at first)
   if(A.length === 2){
     if(A[1] > A[0]) {
       return A[1] - A[0];
     }
     return 0;
   }


   let len = A.length -1;
   let globalMax = 0;
   let maxs = Array(len).fill(0);

   // set first maximum
   maxs[len] = A[len];

   // get globalMaximums
   for(let i = len - 1; i > 0; i--){
     maxs[i] = Math.max(maxs[i+1], A[i]);
   }

   // remove first max
   maxs.shift();

   // track mins and profit
   for(let i = 0 ; i < len -1 ; i++) {
     let Q = maxs[i];
     let P = A[i];
     let profit = Q - P;

     globalMax = Math.max(profit, globalMax);
   }

   // return {maxs, globalMax}
   return globalMax;
 }
