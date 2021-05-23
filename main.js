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
const isLegal = () => {
  // Your code here


}

// Next, what do you think this function should do?
const movePiece = () => {
  // Your code here

}


// What is a win in Towers of Hanoi? When should this function run?
let winningStacks = {
  a: [],
  b: [],
  c: [4, 3, 2, 1]
};


const checkForWin = () => {
  // Your code here
  //.legth to check if the variable stacks equals the new variable with the winning line. 
//checks if line C has the array [4,3,2,1], it will return true. It should say "you win." 
//Else return false and no message.
  if (stacks.length !== winningStacks.lenth) return false;
  // Check if the arrays are the same length

  	// Check if all items exist and are in the same order
  for (var i = 0; i < stacks.length; i++) {
    if (stacks[i] !== winningStacks[i]) return false;
  }
  return true;
};

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here

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
