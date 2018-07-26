/**
 * The description was written on the documentation <3
 *
 */

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let i = 0;
    let count = 0;

    while(i*i < N){
        if(0 === N % i){
            count += 2;
        }
        i++;
    }

    if(i*i === N){
        count++;
    }

    return count;
}
