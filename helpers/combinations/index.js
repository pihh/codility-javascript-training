
// All combinations n by n
const Combinations = function() {};

Combinations.getCombinations = function(array, size, start, initialStuff, output) {
  if (initialStuff.length >= size) {
		output.push(initialStuff);
	} else {
		for (let i = start; i < array.length; ++i) {
			Combinations.getCombinations(array, size, i + 1, initialStuff.concat(array[i]), output);
		}
	}
	return output;
}

Combinations.getAllPossibleCombinations = function(array, size) {
	let output = [];
  return Combinations.getCombinations(array, size, 0, [], output);
}

function test(){
	return Combinations.getAllPossibleCombinations([1,2,3,4,5],4);
}


test();

// 2x2 arrays
function test(array = ["apple", "banana", "lemon", "mango"]){
	var result = [].concat(...array.map(
    (v, i) => array.slice(i+1).map( w => [v , w ] ))
	);
 	return result;
}

test([1,2,3,4,5]);

// NUMERIC ONLY - Return all combinations of strings
function combination (arr) {
  let i, j, temp;
  let result = [];
  let arrLen = arr.length;
  let power = Math.pow;
  let combinations = power(2, arrLen);

  // Time & Space Complexity O (n * 2^n)

  for (i = 0; i < combinations;  i++) {
    temp = '';

    for (j = 0; j < arrLen; j++) {
      // & is bitwise AND
      if ((i & power(2, j))) {
        temp += arr[j];
      }
    }
    result.push(temp);
  }

  return result;
}

combination([1, 2, 3])  // [ "", "1", "2", "12", "3", "13", "23", "123" ]
