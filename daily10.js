// Balance Index
// Here, a balance point is ON an index, not between indices.
// Return the balance index where sums are equal on either side
// (exclude its own value).

// Return -1 if none exist.

// function balancedIndex(arr){
//     for(i = Math.floor(arr.length/2); i <= Math.floor(arr.length/2); i++){
//         balanceIndex = i;
//         leftSum = 0;
//         rightSum = 0;
//         j = Math.floor(arr.length/2);
//         k = Math.floor(arr.length/2);
//         while (j >= 0){
//             leftSum += arr[j];
//             j--;
//         }
//         while (k <= arr.length-1){
//             rightSum += arr[k]
//             k++;
//         }
//         if (leftSum == rightSum){
//             return balanceIndex;
//         }
//         else{
//             return -1;
//         }
//     }
// }

// Had to use online refrences!
// Worked Together With Others!

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

function getSum(arr){
    for(var i = 0; i < arr.length; i++){
        var value = arr[i];
        for(var j = arr.length -1; j>=0; j--){
            var value2 = arr[j]
        }
    if(value == value2){
        console.log("Tests")
        return Math.round(arr[i]);
    }
    else{
        return -1
    }
    }
}

console.log(getSum(nums1))

