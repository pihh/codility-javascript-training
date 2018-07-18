/**
    Se A é par, o tamanho minimo para a condição ser verdade é : A.length/2 + 1
    Se A é impar, o tamanho minimo para a condição ser verdade é : A.length/2

    com base nisto, montar um hashmap que ao ser igual ou maior á metade para o loop e retorna o index.
 */
function solution(A) {
    let index = -1;
    let map = {};
    let isOdd = A.length % 2 == 1;
    let addToHalf = (isOdd)? 0:1;
    let half = Math.ceil(A.length/2) + addToHalf;

    if(A.length === 1 ){
        return 0;
    }

    for(var i = 0; i < A.length; i++) {
        if(map[A[i]] != null) {
            map[A[i]]++

            if(map[A[i]] >= half){
                index = i;
                break;
            }
        } else {
            map[A[i]] = 1;
        }
    }

    return index;

}