var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.


// //new version with map
// const newNumber = numbers.map(double);

// -------------------------------------------------
//Filter - Create a new array by keeping the items that return true.
    
// const newNumber = numbers.filter(function(num){
//     return num > 10
// });

// console.log(newNumber);
//--------------------------------------------------
//Reduce - Accumulate a value by doing something to each item in an array.
// // let sum every item in array

// const newnumbers = numbers.reduce(function (accumulator,currentnumber){
    // return(accumulator + currentnumber)
// 
// })
// 
// console.log(newnumbers)

//--------------------------------------------------
//Find - find the first item that matches from an array.

// const newNumber =numbers.find(function(num){
    // return num > 10;
// })
// 
// console.log(newNumber)




//--------------------------------------------------
//FindIndex - find the index of the first item that matches.

// const newIndexNumber =numbers.findIndex(function(num){
    // return num > 10;
// })
// 
// console.log(newIndexNumber)
const emojipedia = [
    {
      id: 1,
      emoji: "💪",
      name: "Tense Biceps",
      meaning:
        "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
    },
    {
      id: 2,
      emoji: "🙏",
      name: "Person With Folded Hands",
      meaning:
        "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
    },
    {
      id: 3,
      emoji: "🤣",
      name: "Rolling On The Floor, Laughing",
      meaning:
        "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    }
  ];
const meaningText = emojipedia.map(function(array){
    
    return array.meaning.substring(0,100)
})

console.log(meaningText)