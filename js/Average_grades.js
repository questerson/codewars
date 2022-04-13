function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let total = marks.reduce((prev, curr, index) => 
    prev + curr, 0
        )
  console.log(total)
  return Math.floor(total/marks.length) 
}

function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  let total = 0;
  marks.map((mark) => {
    total += mark;
  })
  
  return Math.floor(total/marks.length);
  
}