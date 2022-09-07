There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z



function correctPolishLetters (string) {
    // your code
   string =  string.replace(/ą/g, "a")
    string =  string.replace(/ć/g, "c")
    string =  string.replace(/ę/g, "e")
    string =  string.replace(/ł/g, "l")
    string =  string.replace(/ń/g, "n")
    string =  string.replace(/ó/g, "o")
    string =  string.replace(/ś/g, "s")
    string =  string.replace(/ź/g, "z")
    string =  string.replace(/ż/g, "z")
    
    console.log(string)
    return string
  } 