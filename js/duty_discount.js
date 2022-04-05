function dutyFree(normPrice, discount, hol){

    let duty = normPrice * (discount/100)
    return  Math.floor(hol/duty)  
    
  }