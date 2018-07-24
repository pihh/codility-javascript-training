// ARRAY CHUNK
/**
 * Define the chunk method in the prototype of an array
 * that returns an array with arrays of the given size.
 *
 * @param chunkSize {Integer} Size of every group
 * NOTE: SLOWER METHOD
 */
Object.defineProperty(Array.prototype, 'chunk', {
    value: function(chunkSize) {
        var that = this;
        return Array(Math.ceil(that.length/chunkSize)).fill().map(function(_,i){
            return that.slice(i*chunkSize,i*chunkSize+chunkSize);
        });
    }
});

// NOTE: FASTER METHOD
function chunkArray(myArray, chunk_size){
    var results = [];

    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }

    return results;
}

// CHECK IF ARRAY CONTAINS 1 ELEMENT FROM OTHER ARRAY
/**
 * @description determine if an array contains one or more items from another array.
 * @param {array} haystack the array to search.
 * @param {array} arr the array providing items to check for in the haystack.
 * @return {boolean} true|false if haystack contains at least one item from arr.
 */
var findOne = function (haystack, arr) {
    return arr.some((v) => haystack.indexOf(v) >= 0);
};


// Split in group of 3 items
var result = chunkArray([1,2,3,4,5,6,7,8], 3);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
console.log(result);

// Unique values in array
let uniques = [...new Set([])];

// Filtering
let filtered = [].filter((value,index,array) => value);

// Sort
let sorted = [].sort((a,b) => a - b); // Sorts min to max , stores A as sorted
let sorted2 =[].sort((a,b) => b - a); // Sorts max to min , stores A as sorted

// Split/ Splice , splice stores the new array as the result
// Remove from index
array.splice(index, 1);

// BACKWARD LOOPS
for(var i = array.length; i--;)

// Array uniques count
    var arr = ['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a'];
    var map = arr.reduce(function(prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});

uniqueCount = ['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a'];
var map = new Object();

for(var i = 0; i < uniqueCount.length; i++) {
    if(map[uniqueCount[i]] != null) {
        map[uniqueCount[i]] += 1;
    } else {
        map[uniqueCount[i]] = 1;
    }
}

// Copy array before sorting
let _tmp = A.slice(0);

// ALL INDEX OF
function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

var indexes = getAllIndexes(Cars, "Nano");
