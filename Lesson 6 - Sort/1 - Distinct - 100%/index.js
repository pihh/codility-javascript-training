
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    // I'd definitively would go for this one since I'm not that confident with Sets yet
    // A.filter((v, i, a) => a.indexOf(v) === i);

    // ES6 Version
    return [...new Set(A)].length;
}