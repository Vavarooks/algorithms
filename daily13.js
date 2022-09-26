// Example for deduping sorted array: 
// dedupe of  [ 1, 1, 1, 3, 4, 4, 4, 7, 8, 8 ] will be  [ 1, 3, 4, 7, 8 ]

// Example for deduping of unsorted array:

// Dedupe of [ 3, 4, 1, 4, 4, 5, 3, 4 ] will be [ 1, 3, 4, 5 ]

// Had to use online refrences!
// Worked Together With Others!

function dup(arr) {
    var nwarr= [arr[0]];
    for (var i = 0 ; i < arr.length-1 ; i ++) {
        if(arr[i] != arr[i+1]){
            nwarr.push(arr[i+1])
        }
    } 
    return nwarr
}

console.log(dup([ 1, 1, 1, 3, 4, 4, 4, 7, 8, 8 ]  ))