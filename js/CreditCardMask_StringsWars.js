Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.


//input a sting of numbers 
//output ~ return the string that changes all the numbers to # expect for the last four digits
//example "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//      "1" -->                "1"
//       "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"
//psuedo code use if statment check if string is greater than 4 characters if it is then replace all the digits except for the last with # 

// return masked string
function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
      cc[i] = "#";
  }
  
  cc = cc.join("");
  return cc
}  