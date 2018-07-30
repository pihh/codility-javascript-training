  // Recursive version - returns index 
  function binarySearch(arr, target, start=0, stop=(arr.length-1)) {

    let midPoint = Math.floor(((stop-start)/2) + start)

    switch (true) {
      case arr[midPoint] === target:
        return midpoint
      case stop - start === 0:
        return -1
      case arr[midPoint] < target:
        return binarySearch(arr, target, midPoint+1, stop)
      case arr[midPoint] > target:
        return binarySearch(arr, target, start, midPoint)
    }
  }

  // Iterative version - returns index
  var binarySearch = function(arr, record){
	var start = 0;
	var end = arr.length -1;

	var middleIndex;

	while(start <= end){

		if( start === end){
			middleIndex = start;
		}else{
			// end + start may overflow
			middleIndex = Math.floor( (end - start) / 2 ) + start;
		}

		if(arr[middleIndex] === record){
			return middleIndex;
		}

		if(record < arr[middleIndex]){
			end = middleIndex - 1;
		}else{
			start = middleIndex + 1;
		}
	}

	return -1;
};
