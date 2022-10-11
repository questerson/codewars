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


let string = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

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
console.log("day1")



// 🏆 The Challenge - Day 2
// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// This is awkward... I had a challenge planned for today, but I kept the computer open while I went to water my plants and came back to chaos on the screen. Not to worry, though! I've figured out what happened and we'll fix it today, ready to get back to our main decoding functions tomorrow.

// It turns out that a cat snuck in the house and decided to do some typing while I was away from my desk. Lucky break though, somehow the last key the cat managed to type was a lowercase 'c', and it also somehow managed to be the only lowercase 'c' the cat typed.

// If we remove everything up to and including that first 'c' we'll be at a great starting point! Go ahead and scrap all that cat scratch from the string below.

// Done it? Awesome. Next, it's just a simple matter of undoing what happens when a preschooler dumps a bucket of LEGO blocks on the keyboard. Kids, amiright? You'll want to remove all the instances of the word 'Eek!' in the remaining string please (case sensitive, of course).

// Oh, I also forgot that I accidentally reversed the whole string too. Flip it back around after you've dealt with the 'Eek!'s, if you will.

// It should be looking a lot better now. I left the instructions for what to do now at the start of the remaining string. Do what it says and save the answer somewhere safe for tomorrow's challenge - it's key info.

// Thanks for helping clean up this mess! 🧹 See you tomorrow!

// input given: "af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"

// result unknown 


// psuedo code. index of to find first index of "c" Use slice to cut everything before c

// use replaceAll to replace the 'Eek!' 

// flip the whole string

let str =  "e!!Igv)tSlltBcvbdeDHEdVw!OOtI#Aa.ZMDuLWYpP^VVjDchISOiv#ylhgmQfs"



console.log(str.indexOf('c'))
str = str.slice(str.indexOf('c')+1)
str = str.replaceAll('Eek!', "")
str = str.split("").reverse().join("")
console.log(str)
console.log("day2")



// The Challenge - Day 3
// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// Yesterday you should have come up with a few specific characters that we'll need today. Let's refer to those as our key characters.

// We need to create a function that will replace any instances of any of the key characters in a given string with an empty space (' '). See below for an example with an example set of key characters.

// Remember to keep your code somewhere safe, as you'll need it to decrypt this week's message!


// example key characters -> 'A','_','K','E','Y','!'

// 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'

// // implement key replacement function


// ' you could think this is hard to read before replacing the key characters'

// You didn't think I'd just give you the key for the week and let you skip Day 2, did you?


// Split this string up on *lowercase* 'V'. The first character in each substring besides this first one is what you need to remember for tomorrow's task. vS.A-#IYbSEkiQS5Sn@tq!CcG;+:^myl%CJcWzUZ;vpZQP*nH1KA*GRFI+B/xHR:><%&4.zf*2+Ey0x-#Kci LGcoOz3XKA)SAZ/j>T3sT=~kVs !6=B_Yei~@5~Gn)Q?Q7zI4yqfgXeTsdi9ga43?w^oC~KMqw8i02WHHm%-0QdTBJEum%@R_?,dJk 2t5QmgZRN8xW$fQ@Ge>tub)Ep1YjX()dpD3ru1(Q<8m?vaotN<SqFz-7z8fDWj7s|=UR*E:/CYLzj*?K:uCUmhkASg8;H^/%<HU%>=hhPpLPdb|fBAMvcA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xuveA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xu

// input: vS.A-#IYbSEkiQS5Sn@tq!CcG;+:^myl%CJcWzUZ;vpZQP*nH1KA*GRFI+B/xHR:><%&4.zf*2+Ey0x-#Kci LGcoOz3XKA)SAZ/j>T3sT=~kVs !6=B_Yei~@5~Gn)Q?Q7zI4yqfgXeTsdi9ga43?w^oC~KMqw8i02WHHm%-0QdTBJEum%@R_?,dJk 2t5QmgZRN8xW$fQ@Ge>tub)Ep1YjX()dpD3ru1(Q<8m?vaotN<SqFz-7z8fDWj7s|=UR*E:/CYLzj*?K:uCUmhkASg8;H^/%<HU%>=hhPpLPdb|fBAMvcA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xuveA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xu

// return first letter of each word besides first after splitting by var

// suedocode: replaceAll v with a space 
// make string array split it by v 
// for each array pushing first letter to a new array join new array 


str = "e!!Igv)tSlltBcvbdeDHEdVw!OOtI#Aa.ZMDuLWYpP^VVjDchISOiv#ylhgmQfs"

str =str.replaceAll("v", ' ') 
str = str.split(" ")
console.log(str)
let decoded = []
str.forEach((element, index) => {
if(index != 0){
    decoded.push(element[0])
    console.log(element[0])
    }
})

console.log(decoded)
console.log("day3 babababababsbadfdddddddddddddddddddddddddddddddddddd")


//day 4 

// 🏆 The Challenge - Day 4
// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// Today's challenge is minor to give you all a bit of a break halfway through the challenge week, but there are a couple of side quests I'm going to throw out for those with extra time on their hands.

// So far we've swapped out calculator characters, cleaned up after a cat and a preschooler, and placed some spaces. Today is simple! Given a string, reverse it. Any details like whitespace, letter casing, or punctuation should be preserved and flipped along with the rest of the string. For example:


// "   The white space at the beginning of this string doesn't match the whitespace at the end. "
// // reverse it
// " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "

// " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "

str = " S.A-#IYbSEkiQS5Sn@tq!CcG;+:^myl%CJcWzUZ; pZQP*nH1KA*GRFI+B/xHR:><%&4.zf*2+Ey0x-#Kci LGcoOz3XKA)SAZ/j>T3sT=~kVs !6=B_Yei~@5~Gn)Q?Q7zI4yqfgXeTsdi9ga43?w^oC~KMqw8i02WHHm%-0QdTBJEum%@R_?,dJk 2t5QmgZRN8xW$fQ@Ge>tub)Ep1YjX()dpD3ru1(Q<8m? aotN<SqFz-7z8fDWj7s|=UR*E:/CYLzj*?K:uCUmhkASg8;H^/%<HU%>=hhPpLPdb|fBAM cA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xu eA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xu"
function strReverse(str) {
    return str.split("").reverse().join('')
}

console.log(strReverse(str))




// The Challenge - Day 5
// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// So, I may have bitten off a bit more than I can chew this week. Will you help me out?

// My friend has invented a 'Best Cat-Themed Pun of a TV Show Title Ever' award and I promised I'd help her with the submissions. The problem is, I didn't realize just how much help she would need whittling down the submissions to the finalists. Between work, family, and Huntober, I just don't have time to get the final list over to her. Can you help?

// Here is a comma-separated list of the submissions:

// "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

// There are some very strict rules that the pun submissions had to follow. I need to know which of these cat puns made the cut. I promise tomorrow we'll get back to decoding our secret message, and coincidentally, I'm pretty sure the number of these puns that met the criteria will match a key sequence value we'll need tomorrow. Isn't that lucky?

// Here are the rules these submissions had to follow:
// No empty spaces at the start or end of the submission (my friend can't stand when people don't follow directions)
// Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped)
// Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation)
// The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)
// Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
// Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
// Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
// Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?)
// Send me a DM of the puns that made the cut on Twitter, and go ahead and save the final count to use tomorrow. Thanks!


function  pun(pun) {
    puns = pun.split(",")
    
    clean = []
    let rinsed = [] 
    
    puns.forEach((pun, index) =>{
    pun = pun.trim(pun)
   
    if (pun.toLowerCase().indexOf('dog') > -1 || pun.toLowerCase().indexOf('bark')> -1 || pun.toLowerCase().indexOf('bone')> -1 ) {  }
    else if(pun.length%5 === 0 ){}
     else if((pun.charCodeAt(0) + pun.charCodeAt(pun.length-1))%2 == 0) { }
     else if((pun.length%2 == 0) && pun[(pun.length/2)] == 'e' || pun.length%2 !=0 && pun[Math.ceil(pun.length/2)] == 'e') {}
    
     
     
    else {
       
        clean.push(pun)
    }   
   })
   //Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation) 
  
   clean.forEach((pun, index) =>{
    let count = 0
    let countS = 0
    let countCap = 0
    for(i =0 ; pun.length > i; i++){
        if(pun[i].toLowerCase == pun[i] && pun[i] != ' ' || pun[i] != '.' || pun[i] != '?') {
            count = count + 1 
            
        }
        if( pun[i] == "S") {
            countS = countS+1
        }
        if(pun[i].toUpperCase == pun[i] && pun[i] != ' ' || pun[i] != '.' || pun[i] != '?') {
            countCap = countCap +1 
        }
    }
    if(count%2 ==0 && countS < 1 && countCap > 1){
       // console.log(pun)
        rinsed.push(pun)
    }

   })

   console.log("answer day 5 hereerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
    console.log(rinsed.join(""))
   console.log(rinsed.length)

}

pun("The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood" 
)



// day 6 final count from day 5 was 32
// Pets and the KittyPawlty MeowersThe PawfficeNYPD MewPaw TrekThe Purrlight ZoneMewciferMewster Rogers' Neighborhood
// 8
// The Challenge - Day 6
// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// Thanks for all your help yesterday, you guys are cool cats! Today's challenge will have you removing decoy characters from a string.

// Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string.

// For example:

// // For the string below and 4
// "Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
// // remove decoy strings
// "This is Halloween! This is Halloween!"

// // For the string below and 5
// "The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."
// // remove decoy strings and preach 🙌
// "The Bachelor is a terrible television show."



function manipulation (str, int) {
console.log(str.length)

//remove the int's nth char of str given 
let clean = ""
for (i = int; i < str.length ; i = i + int){
    console.log(i)

    clean = clean + str.slice(i-int, i-1)
    console.log(clean)
 }
 console.log(clean)
 return clean
}

console.log(manipulation("ux_4a196w^FN78kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=Ae ux_4a196w^FN78kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=Ac MABf|bdPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzLYC/:E*RU=|s7jWDf8z7-zFqS<Ntoa ?m8<Q(1ur3Dpd)(XjY1pE)but>eG@Qf$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4Iz7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZp ;ZUzWcJC%lym^:+;GcC!qt@nS5SQikESbYI#-A.S "
,3))


// The Challenge - Day 7
// Oooh, yeah! Here it is, the final function you'll need in your string-decoding arsenal this week. Today's challenge might not be too trying after all the others, but you never know!

// Today you'll need to create a function that swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.

// Examples:


// COPY
// 'A'  // first letter of the alphabet, uppercase
// 'z'  // last letter of the alphabet, lowercase

// 'p'  // 16th letter of the alphabet, lowercase
// 'K'  // 16th letter from *end* of alphabet, uppercase

// 'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
// // function replaces letters with opposites
// 'Example: 0 number or punctuation changes'

function charSwap (str){
 let array = str.split("")
 
 let clean = []
 array.forEach(el =>{
    switch (el){
       case " ":
        clean.push(" ")
        break
       case ":" :
        clean.push(":")
        break
       case "0":
        clean.push("0")
        break
        case 'a':
            clean.push('Z')
            break
        case 'b':
            clean.push('Y')
            break
        case 'c':
            clean.push('X')   
            break
         case 'd':
            clean.push('W')
            break
        case 'e':
            clean.push('V')
            break
        case 'f':
            clean.push('U')  
            break
        case 'g':
            clean.push('T')
            break
        case 'h':
            clean.push('S')
            break
        case 'i':
            clean.push('R')  
            break
         case 'j':
            clean.push('Q')
            break   
            case 'k':
                clean.push('P')
                break
            case 'l':
                clean.push('O')
                break
            case 'm':
                clean.push('N')  
                break
            case 'n':
                clean.push('M')
             case 'o':
                clean.push('L')
                break      
            case 'p':
                clean.push('K')
                break
            case 'q':
                clean.push('J')
                break
            case 'r':
                clean.push('I')  
                break
            case 's':
                clean.push('H')
                break
                case 't':
                    clean.push('G')
                    break
                case 'u':
                    clean.push('F')
                    break
                case 'v':
                    clean.push('E') 
                    break
                 case 'w':
                    clean.push('D')
                    break   
                    case 'x':
                        clean.push('C')
                        break
                    case 'y':
                        clean.push('B')
                        break
                    case 'z':
                        clean.push('A')   
                        break



                        case 'A':
                            clean.push('z')
                            break
                        case 'B':
                            clean.push('y')
                            break
                        case 'C':
                            clean.push('x')  
                            break 
                         case 'D':
                            clean.push('w')
                            break
                        case 'E':
                            clean.push('v')
                            break
                        case 'F':
                            clean.push('u')  
                            break
                        case 'G':
                            clean.push('t')
                            break
                        case 'H':
                            clean.push('s')
                            break
                        case 'I':
                            clean.push('r')  
                            break
                         case 'J':
                            clean.push('q')
                            break   
                            case 'K':
                                clean.push('p')
                                break
                            case 'L':
                                clean.push('o')
                                break
                            case 'M':
                                clean.push('n')  
                                break
                            case 'N':
                                clean.push('m')
                                break
                             case 'O':
                                clean.push('l')
                                break      
                            case 'P':
                                clean.push('k')
                                break
                            case 'Q':
                                clean.push('j')
                                break
                            case 'R':
                                clean.push('i')  
                                break
                            case 'S':
                                clean.push('h')
                                break
                                case 'T':
                                    clean.push('g')
                                    break
                                case 'U':
                                    clean.push('f')
                                    break
                                case 'V':
                                    clean.push('e') 
                                    break
                                 case 'W':
                                    clean.push('d')
                                    break   
                                    case 'X':
                                        clean.push('c')
                                        break
                                    case 'Y':
                                        clean.push('b')
                                        break
                                    case 'Z':
                                        clean.push('a')   
                                        break                
    }   
 })
 console.log(array.join(""))
    console.log(clean.join(""))
}

charSwap("ux_4a19w^FN78k2kX1k&Pc53d ctl?kX7IiQR~M11<!,w^xHV4^Q=HH4)=Ae ux4a196w^N78kz2k1k&Psc5d ctbl?X7Ii.QRM11<T!,^xHVn4^=HH4#)=c MABf|dPLpPhh>%UH<%/H;8gSAkmUCu:K?jzLYC/:*RU=|s7WDf8z7-FqS<Nto ?m8<Q(ur3Dpd)XjY1pE)ut>eG@Q$Wx8NRZmQ5t2 kd,?_R@%uEJBTdQ-%mHHW2i8wqMK~o^w?34a9idsTeXfqy4Iz7?Q)nG~5~ieY_B=! sVk~=s3T>j/ZS)AKX3zocGL ic#-x0yE+*fz.4&%>:RHx/BIFRG*AKHn*PQZp;ZUzWcJ%lym^:+GcC!qt@S5SQikEbYI#-A.")
