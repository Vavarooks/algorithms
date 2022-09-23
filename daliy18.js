// Had to use online refrences!

function anagram(str){
    const output = [];
    function split_str(str, change = ''){
        
      if (!str) output.push(change)
      for (let i = 0; i < str.length; i++){
        split_str(str.slice(0,i) + str.slice(i+1), change + str[i]);
      }
    }
    split_str(str)
    return output
  }

console.log(anagram("abc"));
// input taken in is string
        // squence may be used for the anagram
    // output produced makes the anogram

console.log(anagram("Google", "Oggle"))