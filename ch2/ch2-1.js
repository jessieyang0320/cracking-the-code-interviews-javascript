// remove duplicates from an unsorted linked list
//  how would you solve this problem if a temporary buffer is not allowed 
//  iterate through the list keep a set of all value seen, if a seen value is 
// seen again then skip it.
// will take O(n) time  O(n) space

// declare LinkedList class
var LinkedList = function(value){
	this.value = value;
	this.next = null;
}



var removeDup = function(list){
	if(!list){
		return list;
	}

	let seen = new Set(),
	    node = list;

	seen.add(node.val);
	while(node.next){
		if(seen.has(node.next.val)){
			node.next = node.next.next;
		}else {
			seen.add(node.next.val);
			node = node.next;
		}
	}
}
// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(Nˆ2) TIME --- O(1) SPACE

var removeDups = function(head) {
	if(!head){
		return head
	}

	while(head){
		let current = head;
		while(current.next){
			if(current.next.value === head.value){
				current.next = current.next.next
			}else{
				current = current.next;
			}
		}
		head = head.next; 
	}
}




