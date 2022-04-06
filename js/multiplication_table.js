function multiTable(number) {
    // good luck
    let total= []
    for (i=1; i <= 10; i++){
      total.push(`${i} * ${number} = ${number * i}`)
    }
    return total.join('\n') 
  }