'use strict';

const assert = require('assert');
const { prototype } = require('events');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  // Your code here
  if (stacks[startStack]<stacks[endStack]){
  return true;
   } else if (stacks[startStack].length-1 > 0 && stacks[endStack] == 0){
  //if starting stack is greater than one, saying that there is something there, and the ending position will be open for anything.
   } else return false;
};
//cannot put a bigger block on a smaller block. 
//function needs to check where you're moving your piece. 
//we need parameters of startstack and endStack.
//If the endStack's length is 0
  // return True

//If the endStack length is not 0
  //Get last element of ending stack [arr.length-1], pop???
  //if the last item in endStack is less than startStack item to move 
    //return false
  //else , return true

// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
  // Your code here
  let x = stacks[startStack].pop();
  stacks[endStack].push(x);
   // we need a  parameter called 'startStack'
    // we need a parameter called 'endStack'
  
    // Take the last item for startingStack array // Maybe use pop()?
    // place the itemed that we 'removed' into the 'endStack' // Maybe push()?
    
};




// What is a win in Towers of Hanoi? When should this function run?


const checkForWin = () => {
  // Your code here
  //.legth to check if the variable stacks equals the new variable with the winning line. 
//checks if line C has the array [4,3,2,1], it will return true. It should say "you win." 
//Else return false and no message.
  if (stacks.c.length === 4){
    return true
    console.log('You Win!');
  } else {
    return false
  }

  // Check if the arrays are the same length
    
};

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  movePiece(startStack, endStack)
  // Your code here
 checkForWin()

 if (startStack, endStack) {
    
 
//if statement to check if the move isLegal. use isLegal and pass in start stack and end stack.
const isLegal(startStack, endStack) => {
  
}
//if the statement is true it'll move the piece. console.log invalid move = else statement.
 }

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
