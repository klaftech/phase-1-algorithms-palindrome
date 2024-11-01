function isPalindrome(word) {
  // Write your algorithm here
  const newArray = []
  const wordArray = word.split('')
  wordArray.forEach(letter => newArray.unshift(letter))
  const newWord = newArray.join('')
  if (newWord === word){
    return true
  } else {
    return false
  }
}

function isPalindrome2(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let i = 0; i < word.length / 2; i++) {
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    // if the letters don't match, return false
    const itir = 1+i;
    const charStartingFromEnd = word.charAt(word.length-itir)
    if(word.charAt(i) !== charStartingFromEnd){
      return false
    }
  }

  return true
  // if we reach the middle, and all the letters match, return true
}
console.log("IsPalindrome2: " + isPalindrome2("racecar"))

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  initialize newArray
  convert string to wordArray
  get wordArray length
  loop through wordArray using forLoop
    foreach letter, push to newArray using unshift (append to beginning) 
  recreate string
  compare to word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));


  ///////////////////////////////////////////////
  // isPalindrome2 testing
  ///////////////////////////////////////////////
  console.log("Expecting: true (isPalindrome2)");
  console.log("=>", isPalindrome2("racecar"));

  console.log("");

  console.log("Expecting: false (isPalindrome2)");
  console.log("=>", isPalindrome2("robot"));
}

module.exports = isPalindrome;