function positiveSum(arr) {
  let total = 0 
  arr.forEach(num => {num > 0 ? total += num: 0
    } 
  ) 
  console.log(total)
  return total 
}