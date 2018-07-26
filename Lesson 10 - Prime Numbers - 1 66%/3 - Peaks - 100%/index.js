/**
  * 100%
  * DIFICULT ONE. FAILED A LOT
  * The thing is: We want to know the maximum number of arrays with the same size that contain at least one peak.
  * So the ideia was:
      - track where a peak happens [0,0,1,1,1,1,2,2,2,3] like a stack
      - start from the maximum possible number of arrays , in the case above: 3
      - now, do a while loop backwards and check if that maxmimum possible can divide the array in equal parts ( if is a composite number )
      - if is a composite number it's a candidate for maximum arrays.
          - check if there is a peak in every array by doing so: if the last element of a chunk is greater than the last element of the previous chunk, a peak occured
            - return candidate if so
            - else continue to the next greater candidate
  */
function isPeak(A, i){
  if (A.length ===  0 || A.length === 1 || i === 0 || i === A.length-1) return 0;

  if ((A[i] > A[i-1]) && (A[i] > A[i+1])) return 1;

	return 0;
}

function isCandidate(count_peaks,chunk_size){
    return 0 === count_peaks.length % chunk_size;
}
function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    let peaks = [];
    for (let i = 0; i < A.length; ++i){
        peaks.push(isPeak(A,i));
    }

    let count_peaks = [];
    let lastMax = 0;
    for (i = 0; i < A.length ; ++i){
      lastMax += peaks[i];
      count_peaks.push(lastMax);
    }

	  //console.log(count_peak); // [ 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 3, 3 ]

    if (count_peaks[A.length -1] === 0){return 0;} // No peaks, 0
    if (count_peaks[A.length -1] === 1){return 1;} // 1 peak, 1

    let maxCandidate = count_peaks[count_peaks.length -1];

    while(maxCandidate){
        if(isCandidate(count_peaks,maxCandidate)){
            /**
             * Define condition to success:
             *  each chunk of the array must contain at least 1 peak
             */
             let lastGreater = 0;
             let jump = count_peaks.length/maxCandidate;
             let step = jump -1;
             let success = true;

             //console.log(maxCandidate, step, count_peaks.length);
             while(step < count_peaks.length){

                if(count_peaks[step] > lastGreater){
                    lastGreater = count_peaks[step];
                    // success
                }else{
                    success = false;
                    break;
                }

                step += jump;
             }

             if(success) {
                return maxCandidate;
             }
        }
        maxCandidate--;
    }

    return 1
}

//[1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]
