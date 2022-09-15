//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
function encode(str) {
    var lettNum = 0;
    var firstL = "";
    for(var i = 0; i < str.length; i++ ){
            console.log(i)
        // if the previous value is "" then ignore
        if(str[i] == " "){
            console.log('Pass');
        }
        if(str[i] == str[i-1]){
            lettNum += 1
            console.log('Count', lettNum);
            console.log('STOP', firstL);
        }
        if(str[i] != str[i]){
            firstL += lettNum + str[i]
        }
        // if the letter is NOT equal to the 
        // previous letter then STOP
    }
    return str
}

// var mainImput = "aaaabbcddd";
// var mainOutput = encode(mainImput)

// console.log(mainOutput)

console.log(encode("aaabbcccc"));
console.log(encode("ddddeeeeeffgggg"));
console.log(encode("aaaaabbbbbbbc"));
console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
function decode(str){
            
}

// console.log(decode("a3b2c4"));
// console.log(decode("t2h10j4"));