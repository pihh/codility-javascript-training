function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let proper = 1;
    let stack = [];
    let open = [];
    let close = ')';

    stack = S.split('');

    for(let i = 0; i < stack.length ; i++) {
        if(stack[i] === close){
            if(open.length === 0) {
                proper = 0;
                break;
            }
            open.pop();
        } else {
            open.push('(');
        }
    }

    // Edge case
    if(open.length > 0){
        proper = 0;
    }

    return proper;
}

solution('(()(())())');
solution('())');
solution('');
solution('(');
solution(')(');
