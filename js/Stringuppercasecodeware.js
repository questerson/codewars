// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True


String.prototype.isUpperCase = function(string) {
    console.log(this)
    console.log(this.toUpperCase())
    if(this.includes(`${this.toUpperCase()}`)){
       return true
       }
       else{return false
           }
    
    
  }
  
