// In this case I couldn't run away from a loop inside a loop.
// Brute forcing it was the solution in this case. I should have started by there.
function solution(A) {
    const points =  A.length;
    let intersections = 0;
    let mapPoints = A.map((currentDisc, i) => [i - A[i], i + A[i]]);

    // [[5,5], [0,4], [-4, 6]] => [[-4, 6], [0,4], [5,5]]
    mapPoints = mapPoints.sort((a,b) => a[0] - b[0]);

    for (let j = 0; j < numPoints; j++) {
        const circle = mapPoints[j];
        const circleEnd = circle[1];
        for (let k = j + 1; k < numPoints; k++){
            const comparedDisc = mapPoints[k];
            const comparedStartPoint = comparedDisc[0];
            if (comparedStartPoint <= circleEnd) {
                // comparison disc is within this disc's area
                intersections++;
                if (intersections >10000000){
                    return -1;
                }
            } else {
                // all other discs will be further right than this disc
                break;
            }
        }
    }
    return intersections;
}