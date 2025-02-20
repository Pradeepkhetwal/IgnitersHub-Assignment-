const prompt = require('readline')

//using createInterface method i am creating instance of readline.Interface class.
const input = prompt.createInterface({
  input: process.stdin,
  output: process.stdout
});

//to check for pallindrome i have used stack.
input.question("Enter any string which you want to check ", (userInput) => {
  
  const String = userInput.replace(/\W+/g, '').toLowerCase();
  
  let stack = [];

  let flag = true;

  for (let char of String) {
    stack.push(char);
  }

  for (let i = 0; i < String.length; i++) {
    if (String[i] != stack.pop()) {
      flag = false;
      break;
    }
  }

  if (flag) {
    console.log("Given input is pallindrome");
  }
  else {
    console.log("Given input is not pallindrome");
  }

  input.close();
});