/**
 * 100% score
 */
 

/**
 * First confident attempt
 * Correctness 66%
 * Performance 33%
 * Score 50%
  FALHA NOS BREAKS E CONTINUES MAL USADOS
 */

 function fibArray(n){
   let arr = [0, 1];
   for (let i = 2; i < n + 1; i++){
     arr.push(arr[i - 2] + arr[i -1])
   }
  return arr
 }

 function solution(A){
 	let fibs = fibArray(26); // up to 100.000
   let max = A.length + 1;
   let succesCases = [];
   // Add last step to A
   // get available steps
   let possibleSteps = A.map((el,index) => (1 === el) ? index + 1: el ).filter(el => el > 0);

   // Add last step to the sequence
   possibleSteps.push(max);

   // remove uncessary fibs
   fibs = fibs.filter(el => el <= max );

   /**
    PSEUDO CODE
     loop 1, steps = 1 , 4,5,7,11
       1.1 check if 11 is fibonacci? - NO
       1.2 check if 7 is fibonacci - NO
       1.3 check if 5 is fibonacci - YES - we have a candidate ([5,7,11])

     Loop 2. steps = 2, [7 - 5,11 -5] -> [2,7]
       2.1 check if 7 is fibonacci - NO
       2.2 check if 2 is fibonacci - YES - we have a candidate ([7])

     Loop 3 steps = 3, [7 -2] -> [5]
       2.1 check if 5 is fibonacci -> YES -> we have no array -> so , one solution might be 3 steps

       case we get here and no one if a fib -> return -1.
    */

   let successCases= [];
   function F(array, startAt, currentStepCount){
     currentStepCount++;

     for(let i = array.length -1; i > -1; i--){
         let step = array[i] - startAt;
       	let index = fibs.indexOf(step);
         if(index > -1){

           let candidates = array.slice(i +1);
           if(candidates.length === 0){
            return currentStepCount;
           }
 					return F(candidates,array[i],currentStepCount);
         }

 //      	console.log('NO',step);
     }
     return -1;
   }


   return F(possibleSteps,0,0) || -1;


 }
