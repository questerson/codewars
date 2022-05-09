function getRealFloor(n) {
    let total
    if(n <= 13 && n > 0)
      {total = n-1}
    else if (n>=14){
      total=n-2
    }
    else{
      total = n
    }
    return total 
  }