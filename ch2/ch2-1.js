// remove duplicates from an unsorted linked list
//  how would you solve this problem if a temporary buffer is not allowed 
//  iterate through the list keep a set of all value seen, if a seen value is 
// seen again then skip it.
// N=|list|
// Time: O(N) -> assuming Set is a HashSet structure with O(1) access times 
// additional space: O(N)
// Qs for the interviewer: 1. in what order you want it to be (since linked list
// is an ordered list but now it`s unsorted)
// 2. can I use extra storage 
// 3. what sort of elements are in this linkedlist, i just assume it`s integers 



var removeDup = function(list){
	if(!list){
		return list;
	}

	let seen = new Set() // Set() return an empty object seen={} 
	let node = list;
	}

// add head 
	seen.add(node.val);
	while(node.next){
		if(seen.has(node.next.val)){
			node.next = node.next.next;  //skip the next 
		}else {
			seen.add(node.next.val);
			node = node.next;  //move on to next 
		}
	}
	return list; //return list, head will never change 
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

// assuming we can use extra strage: iterate throught the list
// and store the seen element in the storage and inspect if the
// coming element is already in the storage. 





