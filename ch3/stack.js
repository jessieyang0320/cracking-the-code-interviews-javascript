// what is stack, and how it works

// functions: push, pop, peek, length

// example one: palindrom 

var letters =[];
var word = "racecar";
var rword = "";

for(var i=0 ;i<word.length; i++){
	letters.push(word[i]);
}

for (var i = 0; i< word.length; i++){
	rword += letters.pop()
}

if(rword === word) {
	console.log(word + 'is a palindrom');
} else {
	console.log(word + 'is not a palindrom');
}

// make a stack

var Stack = function(){
	this.count = 0;
	this.storage = [];
// add an item to stack
	this.push = function(value){
		this.storage[this.count] = value;
		this.count++;
	}
// remove and return the last item in the stack
	this.pop = function(){
		if (this.count===0){
			return undefined; 
		}

		this.count--;
		var result = this.storage[this.count];
		delete this.storage[this.count];
		return result
	}

	this.size = function(){
		return this.count
	}

	this.peek = function(){
		return this.storage[this.count - 1]
	}


// test

var myStack = new Stack();

myStack.push("hello")

myStack.push("world")

console.log(myStack.peek) //world
console.log(myStack.pop)  //world
console.log(myStack.peek) //hello








}