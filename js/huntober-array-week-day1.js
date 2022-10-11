// The Challenge - Day 1
// This week we'll be working with arrays toward a final puzzling result on Friday when we combine our daily functions. Your solutions should be built to work within any given daily constraints.

// Do you know how to compare arrays? Not sure? Don't worry, you'll figure it out...

// Today's task is to write a function that will check equality between 2 arrays with a particular structure.

// The arrays will:

// Be of equal size
// Will each contain some number (X) arrays
// Each inner array will contain that same number (X) primitive elements
// All the nested primitives within each array must strictly match to return a true result. Any mismatches will return false.

// For example:


// // each of these arrays have 3 nested arrays of 3 strings each 
 const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]

 const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
 const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

// // if we were to use our function to compare all the possible pairs
// // ONLY arr1 vs arr2 would return true

// checkEquality(arr1, arr2) => true
// checkEquality(arr1, arr3) => false
// checkEquality(arr1, arr4) => false
// // etc.
// Good luck! Check back tomorrow for the next challenge of the week!



function checkEquality(arr1, arr2) {
    count = 0
    if (arr1.length == arr2.length){
        arr1.forEach((element, i) => {
            if(arr1[i][i] != arr2[i][i]){
                //console.log(arr2[i])
                //console.log(arr1[i])
                count =1
                //console.log(count)
            }
        });
        if(count >0){
            return false
        }
        else {
            return true
        }
    }
}

//console.log(checkEquality(arr1, arr4))



// Need to Catch Up?
// Did you miss yesterday's challenge? Each day builds on the last towards a final solution on Friday of each week. Check out this week's challenge for Day 1 and then head back over here.

// I've also added all of this month's challenges to a series here on my blog - hope that helps!

// ⭐ Array Week
// This week our challenges all deal with Arrays! Their purpose is to store a collection of things under a single reference name, but the way they are set up and used in JavaScript is a little different from other programming languages. If you're coming from a different language, be sure to check out what's different! While working on our challenges, feel free to use JavaScript's built-in Array methods.



// 🏆 The Challenge - Day 2
// This week we'll be working with arrays toward a final puzzling result on Friday when we combine our daily functions. Your solutions should be built to work within any given daily constraints.

// So it turns out that some of the information I stored ever-so-safely in arrays just isn't looking right. I'm not going to be happy until it feels right, you know what I mean? Could you help me rearrange things a bit?

// I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.

// Some things to note:

// If the given value is on the edge of the array and can't move in that direction, don't move it.
// The given primitive value will only occur once in the array
// The array passed in should be mutated by this function. Scandalous, I know.
// Example:

myArray = ['abc', 'xyz', 1, 2, 'Hey!']

// // call move left function with 'xyz' and myArray as arguments
// console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

// // call move left function again, same arguments
// // Note that 'xyz' is already as far left as it can go
// console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// // call move right function this time, with 2 and myArray as arguments
// console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

// // call move right function again, same arguments
// // Note that 2 is already as far right as it can go
// console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change
// Got it? Great! I can't wait to get moving things around.

function moveLeft(arr, str) {
    //console.log(arr)
    const index = arr.indexOf(str)
    //console.log(index)
    if (index > -1){
        arr.splice(index, 1)
        //console.log(arr)
        arr.splice(index-1,0, str)
    }
    //console.log(arr)
    arr.splice
}
moveLeft(myArray, 'xyz')

//The Challenge - Day 3
// This week we'll be working with arrays toward a final puzzling result on Friday when we combine our daily functions. Your solutions should be built to work within any given daily constraints.

// Today's challenge is a bit of a tangent, but I think it's pretty powerful. It's inspired by my favorite Codewars kata ever, Moving Zeros To The End. This is my favorite kata because the first time I did it, my approach was so convoluted compared to the top-voted solution, which was a thing of beautiful simplicity. I think the moment I saw that solution something clicked for me and I realized the power of the built-in Javascript methods.

// Today I'd like you to write a function that:

// takes in a given array of strings and move any entries containing the letter 'a' to the front
// then move any remaining entries that have over 3 characters to the back
// please preserve the relative order of entries within their given category
// Example:


 myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// // move things around
// => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']
// Have fun!

function jumpAround (arr) {
    aList = []
    aThree = []
    aCopy = []
    arr.forEach((el, index) => {
        
        elArr = el.split("")
        
        elArr.forEach(letter =>{
            if(letter == 'a'){
                aList.push(arr[index])
                arr.splice(index, 1)
                
            }
        })  
    })
   console.log(aList)
    arr.forEach((str, index)=>{
        //console.log(arr)
        

        if(str.length > 3){
            
             aThree.push(arr[index])
        }
        else {
            aCopy.push(arr[index])
            // index = 0
        }
    })
    console.log(aCopy)
    aThree.forEach(el=>{
        aCopy.push(el)
    })
    console.log(aCopy)
    
    
    // aThree.forEach((arrItem, i)=>{
    //     aCopy.push(aList[i])
        
        
    // })

//console.log(aCopy)
console.log(aList)
    aList.reverse()
    aList.forEach((arritem, i)=>{
    aCopy.unshift(aList[i])
    })

console.log(aCopy)
    


}
jumpAround(myArr)