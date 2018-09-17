/**
 * FIRST ATTEMPT - Brute Forced it a while - the idea of quadriplicated is that you can use 4 equal pieces
 * CORRECTNESS: 94
 * PERFORMANCE: 44
 * SCORE: 76
 */

function solution(A, X) {
    // write your code in JavaScript (Node.js 8.9.4)
    let map = new Map();
    let pieces = [];
    let quadriplicatedPieces = [];
    let count = 0;
    const limit = 1000000000;

    // Get all duplicated pieces
    for(let i = 0; i < A.length; i++){
        let piece = A[i];
        let mappedPiece = map.get(piece);
        if(!mappedPiece){
            map.set(piece, 1);
        }else {
            map.set(piece, ++mappedPiece);
            if(mappedPiece > 3){
                if(quadriplicatedPieces.indexOf(piece) === -1){
                    quadriplicatedPieces.push(piece);
                }
            }
            if(pieces.indexOf(piece) === -1){
                pieces.push(piece);
            }
        }
    }

    // No pieces: return
    if(pieces.length < 2 && quadriplicatedPieces.length === 0){
        return 0;
    }

    for(let i = 0; i < quadriplicatedPieces.length; i++){
        const qP = quadriplicatedPieces[i];
        if(qP * qP >= X){
            count++;
        }
    }

    if(count > limit){
        return -1;
    }

    // sort all duplicated pieces
    pieces.sort((a,b) => a-b);

    // Check how many pieces remain count
    let front = pieces.length -1;
    let back = 0;

    // Should make a catterpillar out of this
    for(let i = 0; i < pieces.length; i++){
        for(let j = pieces.length -1; j > i; j--){
            if(pieces[i] * pieces[j] >= X){
                count++;
                if(count > limit){
                    count = -1;
                    break;
                }
            }
        }
    }

    return count;
}
