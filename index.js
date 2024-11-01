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
}

module.exports = isPalindrome;
