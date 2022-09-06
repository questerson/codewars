
// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


function reverseWords(str){
    let array = str.split(" ")
    console.log(array)
    let final = []
    for(let i = 0; array.length > i; i++){
      final.push(array[array.length-1-i])
        console.log(final)
        console.log(array[array.length-1])
    }
    return final.join(" ")
  }



