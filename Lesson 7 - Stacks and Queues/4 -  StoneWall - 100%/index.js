/**
 * At first I had a hard time to solve this one. It was a problem of visualization, I wasn't seeing clearly that this
 * returned a geometric form like that. After I wasn't getting that they wanted the number of rectangles (
 * that I generate to create that geometric form.
 *
 * This is a process, and a simple one: you open a rectangle each time A[i] is greater than last A[i].
 * You close all rectangles smaller than A[i].
 *
 * A[0] = 8 ; points = 1; stack = [8]
 * A[1] = 8 ; points =
 */

/**
 * @desc: Define when a block should be closed:
 *  when iterates, if value is greater then previous bigger , generate new block, add greater to stack.
 *      if value is smaller than greater, remove greater from stack and evaluate if this is bigger than current bigger.
 *
 *  so, whenever it's bigger than prev bigger add new block
 */

/**
 * @desc: first solution,
 * @performance:
 */

/**
 * Prototype - done in the train
function solution(H) {

    let points = [];
    let lastPoint = -1;
    for(let i = 0; i < H.length; i++){

        let point = A[i];
        if(point < lastPoint){
            points = points.reduce(el => el <= point);
            // when it's smaller, all the rectangles up to that point should close
        }

        let index = points.indexOf(point);

        if(index > -1){
            points.splice(index,1);
        }else if(!points[0] || ){
            points.push(point);
        }
    }

    return points.length;
}
*/

/** 100% ........ O(N) - ver isto melhor, n consegui chegar lá sozinho
 // you can write to stdout for debugging purposes, e.g.
 // console.log('this is a debug message');
 FUCK Consegui o raciocinio mas n consegui exprimi-lo. Quando há 2 pontos no stack faz pop e remove 1 ao contador....
 fds era isto que tinha pensado ontem mas n tinha conseguido codificcar


 function solution(H) {
    var len = H.length,
        stack = [H[0]],
        result = 1;
    if (!len) {
        return 0;
    }
    for (var i = 1; i < len; i++) {
        var currentHeight = H[i];
        while (stack.length && stack[stack.length - 1] >= currentHeight) {
            if (currentHeight == stack[stack.length - 1]) {
                result--;
            }
            stack.pop();
        }
        stack.push(currentHeight);
        result++;
    }
    return result;
}
 */