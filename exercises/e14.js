
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  var wrongBalances = [];
  for (var i in array) {
    var sumD = 0;
    var sumW = 0;
    for (var k in array[i].deposits) {
      sumD += array[i].deposits[k];
    } 
    for (var a in array[i].withdrawals) {
      sumW += array[i].withdrawals[a];
    }
    if (array[i].balance != sumD - sumW) {
      wrongBalances.push(array[i]);
    }
  }
  return wrongBalances;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
