/**
 * SECOND ATTEMPT - track the local maximums and check the last 6 maximumx
 * CORRECTNESS 100
 * PERFORMANCE 100
 * SCORE 100
 */

 function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let map = [A[0]];

    for(let i = 1; i < A.length; i++){
      	const slice = map.slice(Math.max(i-6,0),i);
        map[i] = Math.max(...slice) + A[i];
    }

    return map.pop();

}

/**
 * FIRST ATTEMPT
 * CORRECTNESS: 40
 * PERFORMANCE: 0
 * SCORE: 25
 */

function solution(A) {
    // write your code in JavaScript

    const start = A[0];
    const last = A.length - 1;

    let sum = start;

    function checkNextSix(index){
        const end = Math.max(index + 6, last);

        let max = A[index];
        let nextIndex = end;

        for(index; index < end; index++){
            if(A[index] > -1 || index === last){
                max = A[index];
                nextIndex = index + 1;
                break;
            }

            if(A[index] > max) {
                max = A[index];
                nextIndex = index + 1;
            }
        }

        return {
            max: max,
            nextIndex: nextIndex
        }

    }

    let i = 1;
    while(i < A.length){

        const res = checkNextSix(i);

        if(!res) break;
        if(res.max) sum += res.max;
        if(res.nextIndex){
            i = res.nextIndex;
        }else{
            break;
        }
    }

    return sum;
}
