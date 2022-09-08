// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

//parameters array containing 0 and 1s 

// result an interger equivalant of the binary value represented in the array 

// exaomple // Testing: [0, 0, 1, 0] ==> 2
// // Testing: [0, 1, 0, 1] ==> 5
// // Testing: [1, 0, 0, 1] ==> 9
// // Testing: [0, 0, 1, 0] ==> 2


// psuedo take an array join them into a string then convert them to binary 


const binaryArrayToNumber = arr => {
    // your code
    
    let final = ""
    arr.forEach((element) => { 
    final += element.toString()})
    test = arr.join("")
  console.log(test)
    return parseInt(test, 2)
  }
  