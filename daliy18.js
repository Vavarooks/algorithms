// Had to use online refrences!
// Worked Together With Others!

function listOfAnagrams(str, solutions = [], partial = "") {
    if (!str) {
      solutions.push(partial);
    }
  
    for (var i = 0; i < str.length; i++) {
      var leftSlice = str.slice(0, i);
      var rightSlice = str.slice(i + 1);
      listOfAnagrams(leftSlice + rightSlice, solutions, partial + str[i]);
    }
    return solutions;
  }
console.log(listOfAnagrams("dogi",[],""))
