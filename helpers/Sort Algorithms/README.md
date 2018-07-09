#Description

##Bubble sort
A simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.

### Worst time complexity:
O(n^2)	O(n^2)

##Selection sort
The Selection sort algorithm divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging it with the leftmost unsorted element, and moving the sublist boundaries one element to the right.

### Worst time complexity:
O(n^2)	O(n^2)

##Insertion sort
Insertion sort algorithm iterates, consuming one input element each repetition, and growing a sorted output list. Each iteration removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.

###Worst time complexity:
O(n^2)	O(n^2)

##Shell sort
Shellsort is an in-place comparison sort which can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by insertion (insertion sort). The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. Starting with far apart elements can move some out-of-place elements into position faster than a simple nearest neighbor exchange.

###Worst time complexity
? ?

##Merge sort
Merge sort is a divide and conquer algorithm. Conceptually, a Merge sort works as follows: 1) Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted), 2) Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.

###Worst time complexity
O(n log(n))	O(n log(n))

##Quick sort
Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.

###Worst time complexity
O(n log(n))	O(n^2)

#When to use each sorting mechanism
Sorting algorithms are very sensitive to the input data so we will also try different input data to see how they affect the performances.
For more info visit http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript-all-the-code/.





##BubbleSort - It's good for small data sets
##SelectionSort - faster on small arrays - 20 to 30 elements array , less writes , less flash memory
##InsertionSort - faster on small arrays - 20 to 30 elements array less comparisons
##ShellSort - Shell sort allows swapping of indexes that are far apart, where bubble sort only swaps items that are adjacent.

##QuickSort - Better at arrays , Better when memory is no problem
##MegeSort - Better at linked lists, Better at saving memory