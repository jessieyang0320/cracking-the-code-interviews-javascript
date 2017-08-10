// ch2-2 return Kth to last 
// implement an algorithm to find the kth to last element of a singly linked list

var Node = function(element){
	this.element = element ;
	this.next =null
}

var findKthToLast = function(k, head){
	// recursively
	if(head===null || k<1){
		return;
	}else if(k===1){
		console.log(head.element );
		findKthToLast(k-1, heade.next);
	}
}

/* TESTS */
var a = new Node('1');
var b = new Node('2');
var c = new Node('3');
var d = new Node('4');
var e = new Node('5');
var f = new Node('6');
var g = new Node('7');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

findKthToLast(3, a);

findKthToLast(10, a);

findKthToLast(-1, a);

findKthToLast(0, a);

findKthToLast(1, a);