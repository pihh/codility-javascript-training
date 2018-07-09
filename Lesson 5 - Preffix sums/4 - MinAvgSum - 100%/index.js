function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // Fallbacks / Starting point

    let min = (A[0] + A[1])/2;
    let index = 0;

    /**
     * @param sum {Number} - total sum of the sub array
     * @param length {Number} - length of the sub array
     * @param smallerIndex {Number} - index where the sub array starts
     * @desc if the sum / length is smaller than the minimum value that has been found until this point,
     *      updates the minumum value and the starting index where the sub array that generated
     *      that minimum value starts ( could improve this description LOL ).
     */

    function testForMin(sum,length, smallerIndex){
        let res = sum/length;
        if(res < min) {
            min = res;
            index = smallerIndex;
        }
    }

    for(let i = 2; i < A.length; i++) {
        let sum2 = A[i] + A[i-1];
        testForMin(sum2,2, i-1);
        testForMin(sum2 + A[i-2],3, i-2);
    }

    return index;
}