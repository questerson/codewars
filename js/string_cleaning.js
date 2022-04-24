function stringClean(s){
    return s.split(/\d/).join("");
  }
  
  
  
  
  function stringClean(s){
    let result = '';
    for(let i = 0; i < s.length; i++){
      if(!isNaN(Number(s[i])) && s[i] !== ' ') continue;
      result += s[i];
    }
    return result;
  }
  
  
  
  
  
  function stringClean(s){
    const nums = "1234567890"
    let cleanStr = ""
  
    for (let i = 0; i < s.length; i++) {
      if (nums.includes(s[i])) continue
      else cleanStr += s[i]
    }
    
    return cleanStr
  }


  function stringClean(s){
    // Function will return the cleaned string
    
     return s.split('').filter((n) => n != parseInt(n)).join('');
    
  }