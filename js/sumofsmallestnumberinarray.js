//create a function that returns the sum of the tow lowest positive numbers given an array of minium 4 positive intergers. no floats or non-postitive intergers will be pass

//for example, when an array is passed like {19,5,42,77} the output should be 7

// parameter an array of positive intergers, whole numbers greater than 0, the array has a min of 4 intergers

// result the sum of the two lowers ints in the array a numbers

// example const chai = require("chai");
// const assert = chai.assert;

// describe("Your function", function() {
//   it("should work for basic tests", function() {
//     assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
//     assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
//     assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
//     assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
//     assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
//   });
// });  

// psuedocode:      could do a array method sort 


function sumTwoSmallestNumbers(numbers) {  
    //Code here
    
    numbers.sort((a,z) => {
     return a-z 
    })
    
    return numbers[0]+numbers[1]
  }     

