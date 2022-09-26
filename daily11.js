
// Problem 1: Given a sorted array of n non-repeating elements, 
// write a function to search a given element x in and return the index of x in the array.

// Examples:

// input:[1, 2, 4, 5, 6, 8, 9, 12, 13, 14] , 4
// the index for 4 is 2, so the expected output will be 2

// input:[1, 2, 4, 5, 6, 8, 9, 12, 13, 14] , 10
// there is no 10 in the input, so the expected output will be -1

// Had to use online refrences!
// Worked Together With Others!

function searchIndex(arr, num){
    let first =0;
    let last = arr.length-1

    while(first < last-1){
        //make mid
        let mid = Math.floor((first+last)/2)
        //compare mid to n
        //and change first, last, and mid according to the instructions
        if(arr[mid] == num){
            return mid
        }
        else if(arr[mid] > num){
            for(var i=arr[mid]; i<arr.length-1; i++){
                return num
            }
        }
        else if(arr[mid] < num){
            for(var j=arr[mid]; j >= 0; j--){
                return num
            }
        }
    }
return result
}

// ---------------------------------------

// Prolem 2: Solve binary search for sorted array of repeating elements. 

// Return the last the index of last occurrence of the

// Examples:

// input: [2, 2, 2, 2, 2, 2, 4, 5, 7, 8, 8, 8, 8, 9] , 7
// expected output: 8

// input: [2, 2, 2, 2, 2, 2, 4, 5, 7, 8, 8, 8, 8, 9]  , 3
// The index for the last 2 is 5, so the expected result is 5 

