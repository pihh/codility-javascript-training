/**
 * @desc the classic problem where I fail because I think it's way to simple and do not give it enough time
 * @param A {array}
 * @returns {number}
 *
 * Strategy:
 *  If the array is ordered, the smallest triplet is either:
 *      * the 3 greatest values multiplied
 *      * the two smallest negatives multiplied by the greatest value
 */
function solution(A) {


    A.sort((a,b) => a-b);

    let test1 = A[0] * A[1]* A[A.length -1];
    let test2 = A[A.length -1] * A[A.length -2]* A[A.length -3];

    return (test1 > test2) ? test1: test2;
}