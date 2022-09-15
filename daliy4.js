/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */
var my_strn= " ";
var plus = + 1
var minus = - 1

function isPalindrome(str) {
    for(var i =0; i < str.length; i++){
        console.log(my_strn)
        console.log(i)
        console.log(str)
    }
    if(my_strn == i){
        i++
        my_strn += str[i];
        // check if it can be flipped
        console.log(first, "AHHHHHHHHHHHHHHHHHHHH");
        for(var i = 0; i == minus; i++){
            i++
            my_strn += str[i];
            if(my_strn == i){
                i++
                my_strn += str[i];
                console.log('HELPP')
                return my_strn;
            }
            for(var i = 0; i == plus; i++){
                i++
                my_strn += str[i];
                console.log(my_strn,"IWDVCOUWGYCR")
                console.log(i,"Whahooo!")
            }
            if(my_strn == i){
                i++
                my_strn += str[i];
                console.log("EXPLOSION!")
                return my_strn;
            }
        }
    }
    if(my_strn != i){
        console.log('Pass')
    }
}

const str1 = "a x a";
const expected1 = true;
console.log(isPalindrome(str1));

const str2 = "racecar";
const expected2 = true;
console.log(isPalindrome(str2));

const str3 = "Dud";
const expected3 = false;
console.log(isPalindrome(str3));

const str4 = "oho!";
const expected4 = false;
console.log(isPalindrome(str4));




// // function isPalindrome(str) {
//     var len = str.length;
//     for(i = 0; i < len/2; i++){
//         if(str[i] !== str[len - 1 - i]){
//             return false;
//         }
//     }
//     return true;
// }


/* 
  Longest Palindrome
  For this challenge, we will look not only at the entire string provided,
  but also at the substrings within it.
  Return the longest palindromic substring. 
  Strings longer or shorter than complete words are OK.
  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/
function longestPalindromicSubstring(str) {
    len = str.length; /* variable to hold the length of the passed in string */
    var i, j;
    var result = [];
    var longestPalindrome = "";
    for (i = 0; i < str.length; i++){
        for (j = i + 1; j < str.length + 1; j++){
            result.push(str.slice(i,j));
        }
    }
    for (i = 0; i < result.length; i++){
        for (j = 0; j < result[i].length/2; j++){
            if(str[i] !== str[len - 1 - i]){
                break;
            }
        }
    }
    console.log(longestPalindrome)
}

const phrase1 = "what up, daddy-o?";
const expectedPhrase1 = "dad";
console.log(longestPalindromicSubstring(phrase1));

const phrase2 = "uh, not much";
const expectedPhrase2 = "u";
console.log(longestPalindromicSubstring(phrase2));

const phrase3 = "Yikes! my favorite racecar erupted!";
const expectedPhrase3 = "e racecar e";
console.log(longestPalindromicSubstring(phrase3));

const phrase4 = "a1001x20002y5677765z";
const expectedPhrase4 = "5677765";
console.log(longestPalindromicSubstring(phrase4));

const phrase5 = "a1001x20002y567765z";
const expectedPhrase5 = "567765";
console.log(longestPalindromicSubstring(phrase5));