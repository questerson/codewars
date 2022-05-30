function minSum(arr) {
    let total = 0
 
 arr.sort((a, b)=> {
         return a - b
     } ) 
//   console.log(arr.slice(-1) * arr[0])
//   console.log(arr.length)
 while(arr.length > 1) {
 total += arr.slice(-1) * arr[0]
 arr.pop ()
 arr.shift()
  }
 return total
}