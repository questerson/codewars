function tripleTrouble(one, two, three){
    let string =''
    
    for (let i = 0; i< one.length; i++)
      {
       string += one[i]+two[i]+three[i]
      }
    return string
  }