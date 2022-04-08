const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   const newArr = tutorials.map(tutorial => {
//    return console.log(tutorial.split(' ')); // each word is now its own string  
//   });
//   console.log(newArr)
//   return newArr.map(nestedArr => {
//     return nestedArr.map(word => {
//       return (word[0].toUpperCase() + word.substring(1))
//     }).join(' ');
    
//   });
  
// };

// console.log(titleCased());



// function format(string) {
//   const eachWord = string.split(' ');
//   const newArrCaps = eachWord.map(word => {
//     return word[0].toUpperCase() + word.substring(1)
//   })
//   return newArrCaps.join(' ');
// }

function titleCasedProcessor(inputArray) {
  return inputArray.map(item => function(){
    item.toLowerCase();
    let splitItem = item.split(' ');
    splitItem.map(item => (
      item.substring(1).toUpperCase()
    ));
  });
}

function titleCased() {
  return titleCasedProcessor(tutorials);
}

