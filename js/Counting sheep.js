function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let total = 0 
//   arrayOfSheep.forEach(sheep => {
//                       if (sheep === true)
//                       {total += 1}
//  } ) 
//   console.log(total)
 // return `There are ${total} sheeps in total`
  
   function countSheeps(arrayOfSheep) { return arrayOfSheep.filter(e => e===true).length; }
  
  
  arrayOfSheep.forEach(sheep => sheep === true ? total += 1:0)
  
  return total
}