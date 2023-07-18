//1.
//Shuffle

/* In JavaScript, the Array object has numerous useful methods. 
It does not, however, contain a method that will randomize the order of an array’s elements. 

Let’s create shuffle(arr), to efficiently shuffle a given array’s values. 
Work in-place, naturally. Do you need to return anything from your function? */

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

// Swap elements at current index and random index
    const temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
    }
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
shuffle(myArray);
console.log(myArray); // Shuffled array

/* The shuffle function is defined with arr as the parameter.
The for loop is initialized with i starting from the last index of the array (arr.length - 1) and iterating backward until i is greater than 0.

In each iteration of the loop, a random index randomIndex is generated using Math.random() and Math.floor(). It is a random integer between 0 and the current index i, inclusive.

The three lines perform the swapping of elements at the current index (arr[i]) and the random index (arr[randomIndex]).
The element at the current index is temporarily stored in temp.
The element at the current index is then assigned the value of the element at the random index.
Finally, the element at the random index is assigned the value stored in temp, completing the swap.

The for loop continues to iterate until i becomes 0, effectively shuffling all elements except the first element.
Once the loop is completed, the array arr will be shuffled in-place.
The function doesn't return anything since the shuffling is done directly on the original array passed as an argument.*/

//################################################################################################################################

//2.
//Remove Range

/* Given array, and indices start and end, remove vals in that index range, 
working in-place (hence shortening the array). 
Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it. */

function removeRange(arr, start, end) {
    arr.splice(start, end - start + 1);
    return arr;
}

// Example usage
const myArray = [20, 30, 40, 50, 60, 70];
removeRange(myArray, 2, 4);
console.log(myArray); // Modified array

/* myArray is modified by removing elements from index 2 to index 4 (inclusive) using the removeRange function. 
The resulting modified array is then printed to the console.

After the function call, myArray will be [20, 30, 70], as the elements 40, 50, 
and 60 have been removed from the original array. */

//################################################################################################################################

//3.
//Intermediate Sums

/* You will be given an array of numbers. After every tenth element, 
add an additional element containing the sum of those ten values. 
If the array does not end aligned evenly with ten elements, 
add one last sum that includes those last elements not yet been included in one of the earlier sums. 
Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6] */

function intermediateSums(arr) {
    let sum = 0;
    const result = [];

    for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if ((i + 1) % 10 === 0 || i === arr.length - 1) {
        result.push(sum);
        sum = 0;
        }
    }

    return result;
}

// Example
const myArray = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
const modifiedArray = intermediateSums(myArray);
console.log(modifiedArray);

/* We start by defining the function intermediateSums that takes an array arr as a parameter.
We initialize two variables: sum to keep track of the running sum of elements, 
and result to store the modified array. 

We use a for loop to iterate through each element in the array arr.
In each iteration, we add the current element arr[i] to the running sum sum.
Next, we check if the current index i + 1 is a multiple of 10 ((i + 1) % 10 === 0) 
or if we have reached the last element in the array (i === arr.length - 1).
If either of these conditions is true, 
it means we have reached the end of a ten-element batch or the last element in the array. 
In this case, we push the current value of sum to the result array, effectively storing the intermediate sum.
After pushing the intermediate sum to the result array, we reset the sum back to 0 in preparation for the next ten-element batch.*/

//################################################################################################################################