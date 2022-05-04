function replace(s){
    //coding and coding....
    let vowels = ["a","e", "i","o", "u","A","E", "I","O", "U"]
    return s.split('').map(item => vowels.includes(item) ? '!': item).join('')
  }