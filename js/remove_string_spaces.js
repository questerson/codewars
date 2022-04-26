function noSpace(x){
    let split = x.split("")
    let result =""
    split.forEach(val => {
      if(val != " ")
        {
           result += `${val}`
        }
    })
    
    return result 
    }