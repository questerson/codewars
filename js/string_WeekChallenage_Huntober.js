// The Challenge - Day 1
// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

// Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.

// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'

// input:  "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."

// result; "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// // implement fix function -> 
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."

// psuedo: replace all numbers with provide lettes. break string apart in to an array walk through the array with a if or switch case that check each let to see if need to be replace 
// option two use the string replaceAll to walk through the string replacing all the numbers for there string value. 


let string = "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."

string =string.replaceAll('0' , 'O')
string =string.replaceAll('1' , 'I')
string =string.replaceAll('2' , 'Z')
string =string.replaceAll('3' , 'E')
string =string.replaceAll('4' , 'h')
string =string.replaceAll('5' , 'S')
string =string.replaceAll('6' , 'G')
string =string.replaceAll('7' , 'L')
string =string.replaceAll('8' , 'B')
string =string.replaceAll('9' , 'q')

console.log(string)