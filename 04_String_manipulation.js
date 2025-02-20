const readline = require('readline');

const inputInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

inputInterface.question("Enter any sentence ", (sentence) => {
  
  handleSentence(sentence);
  inputInterface.close();
})

function handleSentence(sentence) {
  
  let words = sentence.split(' ');
  let wordcount = words.length;


  let reverseStr = words.reverse().join(' ');

 //g is global flag here.
  let hypenStr = sentence.replace(/ /g, '-');

  console.log(`Total number of words are ${wordcount}`);
  console.log(`Reversed Sentence: ${reverseStr}`);
  console.log(`Sentence after replacing space with hypen : ${hypenStr}`);
}