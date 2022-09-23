// Had to use online refrences!

function listOfAnagrams(str, solutions = [], partial = "") {
    if (!str) {
      solutions.push(partial);
    }
  
    for (var i = 0; i < str.length; i++) {
      var leftSlice = str.slice(0, i);
      var rightSlice = str.slice(i + 1); // skips current letter
      listOfAnagrams(leftSlice + rightSlice, solutions, partial + str[i]);
    }
    return solutions;
  }

console.log(listOfAnagrams("dogi",[],""))
// input taken in is string
        // squence may be used for the anagram
    // output produced makes the anogram
