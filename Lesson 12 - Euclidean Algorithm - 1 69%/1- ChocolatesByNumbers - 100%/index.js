/**
 * THIRD ATTEMPT
 * Correctness 100%
 * Performance 100%
 * Score 100
 *
 * Strategy:
    - LCM here is the minimum space we need to fit particles with size: M in N sized blocks.
    lcm(10,4) - 4 + 4 + 4 = 12 -> we continue because 12 % 10 !== 0, 4+4+ = 20 , 20%10 , so at this point we will need 20 of space to put 20%5 blocks of 4 size.
    the thing I couldn't see were the repeats but it is logic that they dont fit because we will start at the rest position and the rest position is allways differente than the previous last position 
 */
 function gcd(a,b){
 if (b == 0)
   {return a}
 else
   {return gcd(b, a % b)}
 }

 // FOR 2
 function lcm(a,b) {
   return (a*b)/gcd(a,b);
 }

 function solution(N, M) {
     // write your code in JavaScript (Node.js 8.9.4)
 	return lcm(N,M) / M;
 }

/**
 * SECOND ATTEMPT
 * Correctness 100%
 * Performance 25%
 * Score: 66
 */
function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)
    let map = [];
    let A = Array(N).fill(0);
    let next = 0;

    function touch(index){
        if(A[index] === 0){
            A[index] = 1;
            return true;
        }
        return false;
    }

    touch(next);

    let counter = 100;
    while(true){
        next += M;
        // Since it's a circle , next can be several times greater than N depending on M - Failed here for the first time
        if(next > N -1){
            while(next > N-1){
                next = next - N;
            }
        }
        if(!touch(next)){
            break;
        }
    }

    return A.reduce((old,current) => old + current ,0);
}
