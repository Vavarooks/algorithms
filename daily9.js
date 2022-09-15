// Question1:
/* String: Rotate String
Create a standalone function that accepts a string and an integer,
and rotates the characters in the string to the right by that given
integer amount.
*/

function rotateStr(str,n){
    var result = "";

    for(var i = str.length-n; i >= 0 ; i--){
        result += str[i];

        // have a statement that can limit 
        // how many times we run the loop
        console.log(str[i])
    }
    for(var i = 0; i < str.length-n; i++){
        result += str[i];
        console.log(str[i])
    }
    return result
}

// console.log(result)
console.log(rotateStr("Hello World", 4))