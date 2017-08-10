// ch2-3 Delete middle node: delete a node in the middle of a singly linked list
// do not get access to head
// only access to the node, simply copy the data from next node to the current node 
// and then to delete the next node  
var deleteMiddleNode = function(node){
	if(!node || !node.next){
		throw new Error('invalid node');
	}

	node.element = node.next.element; //copy next node element over to this node
	node.next = node.next.next; // delete next node
}

