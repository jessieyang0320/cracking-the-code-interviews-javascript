// 3-3 stack-of-plates.js
// impletement a data structure SetOfStacks, composed of several stacks and should create 
// a new stack once the previous one exceeds capacity
// Follow up: impletment a function popAt(int index) which
// performs a pop operation on a specific sub-stack 


var SetOfStacks = function(capacity){
	this.capacity = capacity;
	this.stackSet = [];

} ;

SetOfStacks.prototype.push = function(val){
// create new stack when stackSet is empty or full of capacity
// not [].length-1 is the last index 

	if(this.stackSet.length === 0 || this.stackSet[this.stackSet.length - 1].length === this.capacity){
		var newStack = [];
		newStack.push(value);
		this.stackSet.push(newStack);
	}else{
		this.stackSet[this.stackSet.length - 1].push(value)
	}

};

SetOfStacks.prototype.pop = function(){
	if(this.newStack === 0) {
		return undefined 
	} else if (this.stackSet[this.stackSet.length - 1].length ===0) {
		this.stackSet.pop()
	}

	return this.stackSet[this.stackSet.length - 1].pop()

};

SetOfStacks.prototype.peek = function(){
	var currStack = this.stackSet[this.stackSet.length-1]
	return currStack[currStack.length-1]
}

SetOfStacks.prototype.isEmpty = function(){
	return this.stackSet.length === 0
}

SetOfStacks.prototype.popAt = function(index){
	return this.stackSet[index].pop()
}




// TEST
/* TESTS */

var s = new SetOfStacks(3);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
s.push(7);
s.push(8);
s.push(9);
s.push(10);
s.push(11);
s.push(12);
s.push(13);
s.push(14);

console.log(s.stackSet);

// result 
[ [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
  [ 10, 11, 12 ],
  [ 13, 14 ] ]

s.popAt(2);
// result 
9
console.log(s.stackSet);

// result, 9 is deleted from 
[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ], [ 10, 11, 12 ], [ 13, 14 ] ]






