var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let human = 0
    let dog = 0
    let cat = 0
    for (let i = 1; i <= humanYears; i++){
      if (i === 1) {
         dog += 15
         cat += 15
         human += 1
        console.log(dog, cat ,human)
  
      }
      else if(i === 2){
      dog += 9
      cat += 9
      human += 1
        console.log(dog, cat ,human)
  
    }
  else {
    dog += 5
    cat += 4
    human += 1
    console.log(dog, cat ,human)
  }
  
  }
    console.log(dog, cat ,human)
    return [human, cat, dog ];
  }
  