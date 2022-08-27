// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'



//test cases
// const assert = require('chai').assert;

// describe("Basic tests",() => {
//   it('Testing №1 for "3"', () => {
//     let actualClubs = defineSuit('3♣');
//     assertNotPrinting(actualClubs);
//     assert.strictEqual(actualClubs, 'clubs');
//   });
//   it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
//   it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
//   it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));
  
//   function assertNotPrinting(actual) {
//     assert.isDefined(actual, 'You have to return the suit. Did you print it to the console instead?\n');
//   }
// });

//pramaters: A string with two characters, the second of which is a a symbolic representation of a card suit
// return the a string of the name of the suit only, in all lowercase letters
//example '9♦' should == 'diamonds'
// psuedo code: use includes string method with if statemens compare last character of the string using if else if, Use a switch case that compares last character of string


function defineSuit(card) {
    // good luck
   
   if( card.includes("♣")){
     return "clubs"
   }
   else if (card.includes('♠')){
     return "spades"
   }
    else if (card.includes('♦')){
      return "diamonds"
    }
    else if (card.includes('♥')){
      return "hearts"
    }
  }

function defineSuit(card) {
    // good luck
    if (card[1] == "♣"){
      return "clubs"}
      else if (card[1] == "♠"){
        return "spades"
    }
    else if (card[1] == "♦"){
      return "diamonds"
    }
    else{
      return "hearts"
    }
  }



