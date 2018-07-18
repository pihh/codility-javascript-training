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
