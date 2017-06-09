// given a string,write a function to check if any permutation of this 
// string is a palindrome
// check if the number of each char is even, and if odd, check if this is the only one
// count each char in a string 
// check if odd count characters only occurs once.



var palinPerm = function(str){
  var chars = {};
  var currChar;
  // count each char, do not count space and change all characters to lower case 
  str.split(' ').forEach((char) => {
    if(char !== ' '){
      currChar = char.toLowerCase();
      if(chars[currChar] === undefined){
        chars[currChar] = 0;
      
      }
      chars[currChar]++;
    }
  });
  
  // count odd number characters 
  var count;
  Object.keys(chars).forEach((char) => {
    if(chars[char]%2>0){
      count++
    }
  }) 
  if (count>1){
    return false 
  }else{
    return true 
  } 
}

// TEST: 
console.log(palinPerm('Tact Coa'))
console.log(palinPerm('Tact Boa'))