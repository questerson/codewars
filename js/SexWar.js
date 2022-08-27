// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
// describe("reverseWords",function(){
//   it("should work for some examples", function(){
//     Test.assertEquals(reverseWords("hello world!"), "world! hello")
//     Test.assertEquals(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
//     Test.assertEquals(reverseWords("foobar"                       ),  "foobar")
//     Test.assertEquals(reverseWords("kata editor"                  ),  "editor kata")
//     Test.assertEquals(reverseWords("row row row your boat"        ),  "boat your row row row")
//   });
// });


function reverseWords(str){
  let array = str.split(" ")
  console.log(array)
  let final = []
  for(let i = 0; array.length > i; i++){
    final.push(array[array.length-1-i])
      console.log(final)
    
  }
  return final.join(" ")
}