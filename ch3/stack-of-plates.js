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












