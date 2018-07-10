
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let proper = 1;
    let stack = S.split('');
    let open = [];

    let startings = ['{','(','['];
    let endings = ['}',')',']'];

    for( let i = 0; i < stack.length; i++) {
        let s = stack[i];
        let index = endings.indexOf(s);

        if(index > -1){
            let oIndex = open.length -1 ;
            if(oIndex === -1){
                proper = 0;
                break;
            }
            let oKey = open[oIndex];
            let oKeyIndex = startings.indexOf(oKey);
            if(oKeyIndex === index){
                open.pop();
                continue;
            }

            proper = 0;
            break;
        } else {
            open.push(s);
        }
    }

    if(open.length > 0){
        proper = 0;
    }

    return proper;
}