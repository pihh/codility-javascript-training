/**
*/

// Failed ar first time because I did complicate it, strings and arrays share indexOf and slice methods
// Since it's a small sample, instead of for loops inside for loops, a simple if does not count as nested loop.
function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)

    let mins = [];

    for(let i = 0; i < P.length; i++){
        let str = S.slice(P[i], Q[i] + 1);
        let min;

        if(str.indexOf('A') !== -1){
            mins.push(1);
            continue;
        }else if(str.indexOf('C') !== -1){
            mins.push(2);
            continue;
        }else if(str.indexOf('G') !== -1){
            mins.push(3);
            continue;
        }else {
            mins.push(4);
        }

    }

    return mins;
}

// Fails on performance
/*
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let mins = [];
    let subStrings = [];
    S = S.split('').map(el => {
        switch(el){
            case 'A':
                el = 1;
                break;
            case 'C':
                el = 2;
                break;
            case 'G':
                el = 3;
                break;
            case 'T':
                el = 4;
                break;
        }
        return el;
    });

    for(let i = 0; i < P.length; i++){
      subStrings.push(S.slice(P[i],Q[i] + 1));
    }

    subStrings.forEach(ss => {
        mins.push(Math.min(...ss));
    })

    return mins;
}
*/
