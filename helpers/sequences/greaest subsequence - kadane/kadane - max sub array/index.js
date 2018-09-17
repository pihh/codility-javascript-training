/*
function kadane(array) {
  let currentMax, globalMax;

  currentMax = globalMax = array[0];

  for(let i = 0; i < array.length; i++) {
    currentMax = Math.max(array[i], currentMax + array[i]);
    if(currentMax > globalMax) {
      globalMax = currentMax;
    }
  }


  return globalMax;
}

//python
def max_subarray(A):
    max_ending_here = max_so_far = A[0]
    for x in A[1:]:
        max_ending_here = max(x, max_ending_here + x)
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far

// KADANE WITH MAX SUB ARRAY SIZE
/*The idea behind -
A) Kadane's Algo - Basically I have to look for all contiguous sub-arrays of size 4, and also keep track of the maximum sum contiguous sub-array until the end. Whenever I find a new contiguous sub-array, I check if the current sum is greater than the max_sum so far and updates it accordingly.
B) In the first loop is I am just generating the sum of the sub-array of the first 4 elements.
C) In the second loop, I am traversing a sliding window - at each iteration, I am deducting the first element from left and adding next element to the right. And after doing this, updaing the max_so_far to its highest value, by comparing it to its previous hightest value.
*/

function findMaxAverage(nums, k) {

	var curr_max = 0;
	for (var i = 0; i < k; i++) {
		curr_max += nums[i];
	}

	var max_so_far = curr_max;

	for (var j = k; j < nums.length; j++) {
		curr_max += (nums[j] - nums[j - k]);
		// Each time we get a new curr_sum compare it with max_so_far and update max_so_far if it is greater than max_so_far
		max_so_far = Math.max(curr_max, max_so_far);
	}
	return max_so_far / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

// SIMPLE KADANE
function kadane(arraySeq) {
		let maxEndingHere = 0,
				maxSoFar = 0;

		// USED WITH SUCCESS instead of 0, el ! Without this kadanes with negatives might fail
		arraySeq.forEach(function(el) {
				maxEndingHere = Math.max(0,maxEndingHere + el);
				maxSoFar = Math.max(maxSoFar, maxEndingHere);
		});

		return maxSoFar;
}

// KADANE TRACK
function kadane(arraySeq) {
	let track = [],
		maxEndingHere = 0,
		maxSoFar = 0;

	arraySeq.forEach(function(el) {
			maxEndingHere = Math.max(0,maxEndingHere + el);
			maxSoFar = Math.max(maxSoFar, maxEndingHere);
			track.push(maxSoFar);
	});

	return track;
}

// COMPLEX - MAX ENDING AND ARRAY AND INDEXES
function kadane(arraySeq) {
    var maxEndingHere = 0,
        maxSoFar = 0,
        arrayMEHTracker = [],
        arrayLargestSubarray = [];

    arraySeq.forEach(function(el) {
        maxEndingHere = Math.max(0,maxEndingHere + el);
        if (maxEndingHere > 0) {
            arrayMEHTracker.push(el);
        } else {
            arrayMEHTracker.length = 0;
        }

        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        if (maxSoFar === maxEndingHere) {
            arrayLargestSubarray = arrayMEHTracker.slice(0);
        }
    });

    return {
        array: arrayLargestSubarray,
        sum: maxSoFar
    };
}
