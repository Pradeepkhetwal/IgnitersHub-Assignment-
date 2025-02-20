const readline = require('readline')

const inputInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function searchElement(sortedArray, target, start, end) {
  if (start > end) {
    return -1;
  }


  const mid = Math.floor((start + end) / 2);

  if (sortedArray[mid] === target) {
    return mid;
  }

  if (sortedArray[mid] > target) {
    return searchElement(sortedArray, target, start, mid - 1)
  }

  return searchElement(sortedArray, target, mid + 1, end);

}

inputInterface.question("Enter a sorted array of numbers (comma seperated) ", (array) => {
  //here we are converting string to array then converting the substrings to numbers.
  const sortedArray = array.split(',').map(Number);

  inputInterface.question("Enter the target element ", (target) => {
    const targetElement = parseInt(target);
    const searchResult = searchElement(sortedArray, targetElement, 0, sortedArray.length - 1);

    if (searchResult !== -1) {
      console.log(`Element ${targetElement} is found at index ${searchResult}.`);
    } else {
      console.log(`Element ${targetElement} is not found in the array.`);
    }

    inputInterface.close();
  });
});