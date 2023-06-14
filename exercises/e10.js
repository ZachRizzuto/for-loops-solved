// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  var includedLetterNames = [];
  for (var i in array) {
    for (var k in array[i].name) {
      if (array[i].name[k] === letter || array[i].name[k] === letter.toUpperCase()) {
        includedLetterNames.push(array[i].name);
      }
    }
  }
  return includedLetterNames;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
